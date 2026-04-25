import React, { useCallback, useEffect, useMemo, useState } from 'react'
import FilterCar from '../components/FilterCar'
import SearchVehicle from '../components/SearchVehicle'
import { getAllCars, getCarById } from '../services/car.service'
import { toast } from 'react-toastify'
import CarDetails from '../components/CarDetails'
import { normalizeToSingaporeMidnightISO } from '../helpers/normalizeLocalTime'
import { addDays } from 'date-fns'
import { useSearchParams } from 'react-router-dom'
import { useUser } from '../hooks/useUser'

const Cars = () => {

  const { userData } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();
  const carIdFromUrl = searchParams.get("carId");
  const minDate = useMemo(() => addDays(new Date(), 1), []);
  const maxDate = useMemo(() => addDays(new Date(), 90), []);
  const buildDefaultRange = useCallback(() => ([
    {
      startDate: minDate,
      endDate: addDays(minDate, 1),
      key: "selection",
    }
  ]), [minDate]);

  const [range, setRange] = useState(() => buildDefaultRange());

  const resetRange = useCallback(() => {
    setRange(buildDefaultRange());
  }, [buildDefaultRange]);

  const [allCars, setAllCars] = useState([]);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("contain");
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  const [filters, setFilters] = useState({
    fuelType: "",
    vehicleType: "",
    seater: null,
    brand: "",
  });

  const closeCarDetails = useCallback(() => {
    setSelectedCarId(null);
    setSelectedCar(null);
    resetRange();

    searchParams.delete("carId");
    setSearchParams(searchParams, { replace: true });
  }, [resetRange, searchParams, setSearchParams]);

  useEffect(() => {
    if(!userData) {
      return;
    } else {
      document.body.style.overflow = selectedCarId ? 'hidden' : 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCarId, userData]);

  const fetchAllCars = useCallback(async () => {
    try {
      const start = range?.[0]?.startDate;
      const end = range?.[0]?.endDate;

      const hasValidRange =
        start instanceof Date &&
        end instanceof Date &&
        end.getTime() > start.getTime();

      const startISO = hasValidRange ? normalizeToSingaporeMidnightISO(start) : undefined;
      const endISO = hasValidRange ? normalizeToSingaporeMidnightISO(end) : undefined;

      const response = await getAllCars(currentPage, itemsPerPage, query, mode, startISO, endISO, filters);

      if (!response?.success) {
        toast.error(response?.message || "Failed to fetch cars");
        console.error("Failed to fetch cars", { startISO, endISO, response });
        return;
      }

      setTotalPages(response?.pagination?.totalPages || 1);
      setAllCars(response?.data || []);
    } catch (error) {
      console.log("An Error Occurred at fetchAllCars()", error);
      toast.error("Unable to fetch cars");
    }
  }, [currentPage, itemsPerPage, mode, query, range, filters]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchAllCars();
    }, 300);

    return () => clearTimeout(timeOut);
  }, [fetchAllCars]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, mode, filters]);

  useEffect(() => {
    if(!selectedCarId) return;
    const fetchCar = async () => {
      setSelectedCar(null); //remove previous response car data
      try {
        const response = await getCarById(selectedCarId);
        setSelectedCar(response.data);
      } catch (error) {
        console.log("An Fetching getCarById", error);
      }
    };

    fetchCar();
  }, [selectedCarId]);

  useEffect(() => {
    if (!carIdFromUrl) return;

    setSelectedCarId(carIdFromUrl);

    resetRange();
  }, [carIdFromUrl, resetRange]);

  return (
    <div className='relative bg-[#d6d6d6]'>
      <div className='flex flex-col justify-center items-center px-25'>
        <div className='w-full text-center mt-15 text-3xl font-bold'>
          Find Your Perfect Ride Today
        </div>
        {/* <SearchBar/> */}
        <div className='w-3/5 font-semibold pt-7 font-serif text-center italic'>
          “Find Your Perfect Ride Today by exploring our complete vehicle collection. Use smart filters to narrow down options by brand, fuel type, seating capacity, and availability, and select the car that best fits your journey.”
        </div>
      </div>
      <div className='my-10 grid grid-cols-7'>
        <FilterCar
          filters={filters}
          setFilters={setFilters}
          setCurrentPage={setCurrentPage}
        />
        <SearchVehicle
        allCars={allCars}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        query={query}
        setQuery={setQuery}
        mode={mode}
        setMode={setMode}
        setSelectedCarId={setSelectedCarId}
        />
      </div>
      {userData && selectedCarId && selectedCar && (
        <CarDetails
          selectedCarId={selectedCarId}
          setSelectedCarId={setSelectedCarId}
          selectedCar={selectedCar}
          range={range}
          setRange={setRange}
          minDate={minDate}
          maxDate={maxDate}
          onClose={closeCarDetails}
          onBookingSuccess={resetRange}
        />
      )}
    </div>
  )
}

export default Cars
