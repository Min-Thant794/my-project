import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { cancelMyBooking, getMyBooking, updateMyBooking } from '../services/booking.service'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const Booking = () => {

  const [myBookings, setMyBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(null);
  const [isSelectedFilter, setIsSelectedFilter] = useState("All")
  const minDate = useMemo(() => addDays(new Date(), 1), []);
  const maxDate = useMemo(() => addDays(new Date(), 90), []);

  const statusColors = {
    Pending: "bg-yellow-500",
    Confirmed: "bg-green-500",
    Completed: "bg-blue-500",
    Expired: "bg-[#434343]",
    Cancelled: "bg-red-500"
  }

  const buildDefaultRange = useCallback(() => ([
    {
      startDate: minDate,
      endDate: addDays(minDate, 1),
      key: "selection",
    }
  ]), [minDate]);

  const [range, setRange] = useState(() => buildDefaultRange());
  const filterBooking = ["All", "Pending", "Expired", "Confirmed", "Completed", "Cancelled"];

  const filteredBookings = useMemo(() => {
    if (!Array.isArray(myBookings)) return [];
    if (isSelectedFilter === "All") return myBookings;
    return myBookings.filter((b) => b?.bookingStatus === isSelectedFilter);
  }, [myBookings, isSelectedFilter]);

  const fetchMyBookings = async () => {
    try {
      setIsLoading(true);
      const response = await getMyBooking();

      if(!response?.data) {
        //toast.error(response?.message || "Failed to fetch data");
        setMyBookings([]);
        return;
      }
    
      const bookingsArray = Array.isArray(response?.data) ? response.data : [];
      setMyBookings(bookingsArray);

      console.log("fetchMyBookings response: ", response.data);
    } catch (error) {
      console.log("An Error Occurred at fetchMyBooking()", error);
      setMyBookings([]);
    } finally {
      setIsLoading(false);
    }
  }

  const handleUpdateBooking = async (bookingId) => {
    try {
      setIsLoading(true);
      if(!bookingId) {
        toast.error("Invalid booking Id");
        console.log("Invalid booking ID");
        return;
      }

      const { startDate, endDate } = range[0];

      const response = await updateMyBooking(bookingId, {
        startDate,
        endDate
      });

      if (!response?.success) {
        toast.error(response?.message || "Failed to update booking!");
        console.log("Failed to update booking");
        return;
      }

      toast.success(response?.data?.message || "Booking updated successfully!");
      console.log("handleUpdateBooking() resposne:", response?.data);

      await fetchMyBookings();
      // setMyBookings(response?.data);
      setIsUpdating(null);
    } catch (error) {
      console.log("An Error Occurred at handleUpdateBooking()", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleCancelBooking = async (bookingId) => {
    try {
      setIsLoading(true);

      if(!bookingId) {
        toast.error("Invalid booking ID");
        console.log("Invalid booking ID");
        return;
      }

      const response = await cancelMyBooking(bookingId);

      if(!response?.success) {
        toast.error( response?.message || "Failed to update booking");
        console.log("Failed to update booking()");
        return;
      }

      // setMyBookings((prev) => prev.map((b) => b._id === bookingId ? {...b, bookingStatus: "Cancelled"} : b));
      await fetchMyBookings();
      setIsUpdating(null);
      toast.success("Booking Cancelled");
    } catch (error) {
      toast.error("Failed to cancel booking!");
      console.log("An Error Occurred at handleCancelBooking()", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMyBookings();
  }, []);

  return (
    <div>
      <div className='w-full px-25 flex flex-col gap-5'>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <div className='text-2xl italic font-serif font-bold tracking-bold'>My Bookings</div>
            <div className='text-sm'>View your booking history and current reservations</div>
          </div>
        </div>
        <div className='flex gap-3 justify-end pt-5 items-center'>
          {filterBooking.map((f) => (
            <div
              key={f}
              onClick={() => setIsSelectedFilter(f)}
              className={`px-3 py-2 rounded-lg border-2 cursor-pointer
                ${isSelectedFilter === f ? "bg-footer text-amber-50" : ""}`}
            >
              {f}
            </div>
          ))}
        </div>

        {
          myBookings.length === 0 &&
          <div className="flex flex-col items-center justify-center py-20 gap-6 text-center">
            {/* Calendar icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#d6d6d6] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.15)] flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="16" width="52" height="44" rx="6" fill="#c4c4c4" stroke="#a0a0a0" strokeWidth="1.5"/>
                <rect x="10" y="16" width="52" height="14" rx="6" fill="#b0b0b0" stroke="#a0a0a0" strokeWidth="1.5"/>
                <rect x="10" y="24" width="52" height="6" fill="#b0b0b0"/>
                <rect x="22" y="10" width="4" height="12" rx="2" fill="#6b6b6b"/>
                <rect x="46" y="10" width="4" height="12" rx="2" fill="#6b6b6b"/>
                <line x1="22" y1="42" x2="50" y2="42" stroke="#a0a0a0" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3"/>
                <line x1="22" y1="50" x2="42" y2="50" stroke="#a0a0a0" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3"/>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold text-footer">No bookings yet</p>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                Your reservations will appear here once you book a car.
              </p>
            </div>
            <NavLink
              to={"/cars"}
              className="mt-2 px-6 py-2.5 rounded-full bg-footer text-amber-50 font-semibold text-sm shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] shadow-gray-700 hover:opacity-90 active:opacity-65 transition-all cursor-pointer"
            >
              Browse Cars
            </NavLink>
          </div>
        }
          
        <div className='w-full flex flex-col'>
          {
            filteredBookings.map((booking) => (
              <div
              key={booking._id}
              className='grid grid-cols-7 h-full bg-[#a4a4a4] mb-5 rounded-lg shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]'
              >
                <div className='col-span-2 h-full'>
                  <img 
                  src={booking?.carId?.carImageUrl} alt="" 
                  className='h-full w-full rounded-l-lg object-cover'
                  />
                </div>
                <div className='flex flex-col gap-5 col-span-5 py-5 px-7'>
                  <div className='flex justify-between items-start'>
                    <div className='flex flex-col gap-1 justify-between'>
                      <div className='text-xl font-bold '>
                        {booking?.carId?.carName}
                      </div>
                      <div className='flex gap-2 justify-start items-center'>
                        <div className='font-semibold'>
                          Booking ID:
                        </div>
                        <div className='font-bold'>
                          {booking._id}
                        </div>
                      </div>
                    </div>
                    <div className={`px-2 py-1 text-sm font-bold text-amber-50 ${statusColors[booking?.bookingStatus] || "bg-footer"} rounded-full text-center flex justify-center items-center shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]`}>
                      {booking?.bookingStatus}
                    </div>
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col bg-[#eaeaea] rounded-lg px-2 py-1 shadow-xl'>
                      <div className='font-bold text-black/60'>Pickup → Return</div>
                      <div className='flex gap-2 font-bold'>
                        <div>
                          {booking?.startDate?.slice(0, 10)}
                        </div>
                        <div>
                          →
                        </div>
                        <div>
                          {booking?.endDate?.slice(0, 10)}
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col font-bold bg-[#eaeaea] rounded-lg px-2 py-1 shadow-xl'>
                      <div className='text-black/60'>Total</div>
                      <div>$ {booking?.totalPrice}</div>
                    </div>
                  </div>
                  <div className='w-full flex justify-end items-center'>
                    {
                      isUpdating === booking._id ?
                      <div className='relative flex justify-end gap-2 w-full'>
                        <div className="absolute left-0 -top-2 scale-80 origin-top-left bg-100 -mb-12">
                          <DateRange
                            ranges={range}
                            onChange={(item) => setRange([item.selection])}
                            moveRangeOnFirstSelection={false}
                            editableDateInputs
                            minDate={minDate}
                            maxDate={maxDate}
                          />
                        </div>

                        <div onClick={() => {
                          handleCancelBooking(booking._id);
                        }}
                          className='bg-footer px-3 py-2 rounded-lg text-center cursor-pointer active:opacity-65 hover:opacity-90 text-amber-50 font-semibold shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]'>
                          Cancel Booking
                        </div>
                        <div
                        onClick={() => setIsUpdating(null)}
                        className='bg-[#ff0000] px-3 py-2 rounded-lg text-center cursor-pointer active:opacity-65 hover:opacity-90 text-amber-50 font-semibold shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]'
                        >
                          Cancel
                        </div>
                        <div 
                        onClick={() => {
                          handleUpdateBooking(booking._id);
                        }}
                        className='bg-footer px-3 py-2 rounded-lg text-center cursor-pointer active:opacity-65 hover:opacity-90 text-amber-50 font-semibold shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]'>
                          Update
                        </div>
                      </div>
                      :
                      <div
                      onClick={() => setIsUpdating(booking._id)}
                      className='bg-footer px-3 py-2 rounded-lg text-center cursor-pointer active:opacity-65 hover:opacity-90 text-amber-50 font-semibold shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]'>
                        Edit Booking
                      </div>
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Booking
