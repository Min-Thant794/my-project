import React from 'react'

const FilterCar = () => {
  return (
    <div className='col-span-2'>
        <div className='bg-footer pb-7 shadow-xl rounded-tr-xl rounded-br-xl'>
            <div className='pl-25 pr-5'>
            <div className='text-3xl text-amber-50 py-5 font-bold font-serif italic'>
                Our Vehicles
            </div>
            <div className='text-2xl font-semibold text-amber-50 tracking-wide pt-1 pb-3 border-b-2 border-amber-50'>
                Filter by
            </div>
            
            {/* fuel type */}
            <div className='flex flex-col py-3 border-b-2 border-amber-50'>
                <div className='font-semibold text-amber-50 text-lg'>
                Fuel Type
                </div>
                <div className='text-amber-50'>
                <div className='grid grid-cols-2'>
                    <div>
                    <option value=""></option>
                    <div>
                        Diesel
                    </div>
                    </div>
                    
                    <div>
                    <option value=""></option>
                    <div>
                    Electric
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Petrol
                    </div>
                </div>
                </div>
                </div>
            </div>

            {/* vehicle type */}
            <div className='py-3 border-b-2 border-amber-50'>
                <div className='text-lg text-amber-50 font-semibold'>
                Vehicle Type
                </div>
                <div className='text-amber-50'>
                <div className='grid grid-cols-2'>
                    <div>
                    <option value=""></option>
                    <div>
                        Crossover
                    </div>
                    </div>
                    
                    <div>
                    <option value=""></option>
                    <div>
                    Sedan
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    SUV
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    MPV
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Hatchback
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Station wagon
                    </div>
                </div>
                </div>
                </div>
            </div>

            {/* seater */}
            <div className='flex flex-col py-3 border-b-2 border-amber-50'>
                <div className='text-amber-50 font-semibold text-lg'>
                Seater
                </div>
                <div className='text-amber-50'>
                <div className='grid grid-cols-2'>
                    <div>
                    <option value=""></option>
                    <div>
                        4-Seater
                    </div>
                    </div>
                    
                    <div>
                    <option value=""></option>
                    <div>
                    5-Seater
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    6-Seater
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    7-Seater
                    </div>
                </div>
                </div>
                </div>
            </div>

            {/* brand */}
            <div className='flex flex-col py-3'>
                <div className='text-amber-50 font-semibold text-lg'>
                Brand
                </div>
                <div className='text-amber-50'>
                <div className='grid grid-cols-2'>
                    <div>
                    <option value=""></option>
                    <div>
                        Audi
                    </div>
                    </div>
                    
                    <div>
                    <option value=""></option>
                    <div>
                    BMW
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    BYD
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Ford
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Honda
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Hyundai
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    KIA
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Lexus
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Mazda
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Mercedes-Benz
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Mitsubishi
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Nissan
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Peugeot
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Subaru
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Tesla
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Toyota
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Volkswagen
                    </div>
                </div>

                <div>
                    <option value=""></option>
                    <div>
                    Volvo
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className='col-span-5'>

        </div>
    </div>
  )
}

export default FilterCar