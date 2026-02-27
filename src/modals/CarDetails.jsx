import React, { useMemo, useState } from 'react'
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import { IoClose } from 'react-icons/io5'
import { validateBookingInput } from '../helpers/bookingValidation.helper'
import { toast } from 'react-toastify'
import { createMyBooking } from '../services/booking.service'
import { normalizeToSingaporeMidnightISO } from '../helpers/normalizeLocalTime';

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CarDetails = ({selectedCarId, setSelectedCarId, selectedCar}) => {

  const minDate = useMemo(() => addDays(new Date(), 1), []);
  const maxDate = useMemo(() => addDays(new Date(), 90), []);

  const [range, setRange] = useState([
    {
        startDate: minDate,
        endDate: addDays(minDate, 1),
        key: "selection"
    }
  ]);

  const startDate = range[0].startDate;
  const endDate = range[0].endDate;

  const nights = useMemo(() => {
    if(!startDate || !endDate) {
        return 0;
    }

    const ms = endDate.getTime() - startDate.getTime();
    return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
  }, [startDate, endDate]);

  const total = useMemo(() => {
    const pricePerDay = Number(selectedCar?.pricePerDay || 0);
    return pricePerDay * nights;
  }, [selectedCar?.pricePerDay, nights]);

  const handleBooking = async () => {
    const validationError = validateBookingInput({ carId: selectedCarId, startDate, endDate});
    if(validationError) return toast.warn(validationError);

    const response = await createMyBooking({
        carId: selectedCarId,
        startDate: normalizeToSingaporeMidnightISO(startDate),
        endDate: normalizeToSingaporeMidnightISO(endDate)
    });

    if(!response?.success) {
        return toast.error(response?.message || "Booking creation failed");
    }

    toast.success("Booking created successfully!");
    setSelectedCarId(null);
  };

  return (
    <div 
    onClick={() => setSelectedCarId(null)}
    className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
        <div 
        onClick={(e) => e.stopPropagation()}
        className='relative w-3/5 h-170 mt-5 bg-[#a4a4a4] rounded-xl border-2 border-[#a4a4a4] shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]'>
            <IoClose
            onClick={() => {
                setSelectedCarId(null);
            }}
            className='absolute top-3 right-3 text-2xl cursor-pointer active:opacity-65 hover:opacity-90'
            />
            <div className='w-full h-full flex '>
                <div className='w-2/3 h-full'>
                    <div className='text-2xl h-full left-3 top-3 font-bold absolute italic font-serif'>
                        {selectedCar?.carName}
                    </div>
                    <div className='w-full h-100'>
                        <img 
                        src={selectedCar?.carImageUrl}
                        className='w-full h-full object-cover rounded-tl-xl rounded-br-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]'
                        />
                    </div>
                    <div className='flex flex-col justify-center px-5 my-3 items-center w-full'>
                        <div className='w-full px-5 shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-lg mt-5'>
                            <div className='text-2xl pt-5 w-full italic font-serif font-bold tracking-wide'>
                                Description
                            </div>
                            <div className='font-semibold py-3 pr-5'>
                                {selectedCar?.description}
                            </div>
                        </div>
                        <div className='flex w-full justify-center items-center gap-5 my-5'>
                            <div className='border-2 flex flex-col border-footer rounded-lg w-1/5 text-center shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]'>
                                <div className='font-bold text-lg'>
                                    {selectedCar?.vehicleType}
                                </div>
                                <div>
                                    Vehicle Type
                                </div>
                            </div>
                            <div className='border-2 flex flex-col border-footer shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-lg w-1/5 text-center'>
                                <div className='font-bold text-lg'>
                                    {selectedCar?.seater}
                                </div>
                                <div>
                                    Seater
                                </div>
                            </div>
                            <div className='border-2 flex flex-col border-footer shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-lg w-1/5 text-center'>
                                <div className='font-bold text-lg'>
                                    {selectedCar?.fuelType}
                                </div>
                                <div>
                                    Fuel Type
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-1/3 my-10 h-155 rounded-lg px-3 mx-3 bg-[#a4a4a4] shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] flex flex-col'>
                    <div className='text-2xl pb-5 font-bold'>
                        Pickup and Return
                    </div>
                    <div className="scale-85 origin-top-left bg-100 -mb-12">
                    <DateRange
                        ranges={range}
                        onChange={(item) => setRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        editableDateInputs
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                    </div>
                    <div className='pt-2 mt-5 border-t-3 h-full'>
                        <div className='text-2xl font-bold'>
                            Price Summary
                        </div>
                        <div className='flex flex-col gap-2 py-5'>
                            <div className='flex items-center font-semibold'>
                                <div className='w-8/10'>
                                    Price per day x night
                                </div>
                                <div className='w-2/10'>
                                    Total
                                </div>
                            </div>
                            <div className='flex items-center font-semibold'>
                                <div className='w-8/10'>
                                    S$ {Number(selectedCar?.pricePerDay || 0)} x {nights} nights
                                </div>
                                <div className='w-2/10'>
                                    S$ {total}
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between pt-3 border-t-3 text-2xl font-bold'>
                            <div>
                                Total
                            </div>
                            <div>
                                S$ {total}
                            </div>
                        </div>
                    </div>

                    <button
                    type='button' 
                    onClick={handleBooking}
                    disabled={!selectedCarId || nights <= 0}
                    className='w-full mb-3 rounded-lg shadow-gray-700 shadow-[0_5px_10px_-5px_rgba(0,0,0,0.3)] bg-footer active:opacity-65 hover:opacity-90 cursor-pointer text-white font-bold text-lg text-center py-2'>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarDetails