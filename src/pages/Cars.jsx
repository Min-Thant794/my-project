import React, { useEffect, useMemo, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import FilterCar from '../components/FilterCar'
import SearchVehicle from '../components/SearchVehicle'
import { getAllCars, getCarById } from '../services/car.service'
import { toast } from 'react-toastify'
import CarDetails from '../modals/CarDetails'
import { normalizeToSingaporeMidnightISO } from '../helpers/normalizeLocalTime'
import { addDays } from 'date-fns'

const Cars = () => {

  const minDate = useMemo(() => addDays(new Date(), 1), []);
  const maxDate = useMemo(() => addDays(new Date(), 90), []);
  const [ range, setRange ] = useState([
    {
      startDate: minDate,
      endDate: addDays(minDate, 1),
      key: "selection",
    }
  ]);

  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("contains");
  const [selectedCarId, setSelectedCarId] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  if(selectedCarId) {
      document.body.style.overflow = "hidden"
  } else {
      document.body.style.overflow = "auto"
  }

  const fetchAllCars = async () => {
    try {
      setIsLoading(true);

      const startISO = range?.[0]?.startDate
      ? normalizeToSingaporeMidnightISO(range[0].startDate)
      : null;

      const endISO = range?.[0]?.endDate
        ? normalizeToSingaporeMidnightISO(range[0].endDate)
        : null;
      
        const response = await getAllCars(currentPage, itemsPerPage, query, mode, startISO, endISO);

      if(!response?.success) {
        toast.error("Failed to fetch cars");
        console.error("Failed to fetch cars");
        return;
      }

      setTotalPages(response?.pagination?.totalPages || 1);
      //toast.success(response?.message);
      setAllCars(response?.data || []);
      
    } catch (error) {
      console.log("An Error Occurred at fetchAllCars()", error);
      toast.error("Unable to fetch cars");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllCars();
  }, [currentPage, range]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchAllCars();
    }, 300);

    return () => clearTimeout(timeOut);
  }, [currentPage, query, mode, range]);

  useEffect(() => {
    setCurrentPage(1);
  }, [query, mode]);

  useEffect(() => {
    if(!selectedCarId) return;
    const fetchCar = async () => {
      setIsLoading(true);
      setSelectedCar(null); //remove previous response car data
      try {
        const response = await getCarById(selectedCarId);
        setSelectedCar(response.data);
      } catch (error) {
        console.log("An Fetching getCarById", error);
      }
    };

    fetchCar();
  }, [selectedCarId])

  return (
    <div className='relative'>
      <NavBar/>
      <div className='px-25'>
        <div className='w-full text-center mt-15 text-3xl font-bold'>
          Find Your Perfect Ride Today
        </div>
        <SearchBar/>
      </div>
      <div className='my-10 grid grid-cols-7'>
        <FilterCar/>
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
      {
        selectedCarId && (
          <CarDetails
            selectedCarId={selectedCarId}
            setSelectedCarId={setSelectedCarId}
            selectedCar={selectedCar}
            range={range}
            setRange={setRange}
            minDate={minDate}
            maxDate={maxDate}
          />
        )
      }
      <Footer/>
    </div>
  )
}

export default Cars