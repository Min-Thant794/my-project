import React from "react";
import { IoClose } from "react-icons/io5";

const FilterCar = ({ filters, setFilters, setCurrentPage }) => {
  const fuelType = ["Diesel", "Electric", "Petrol"];
  const vehicleType = ["Crossover", "Sedan", "SUV", "MPV", "Hatchback", "Station Wagon"];
  const seater = [4, 5, 6, 7];
  const brands = [
    "Audi","BMW","BYD","Ford","Honda","Hyundai","KIA","Lexus","Mazda",
    "Mercedes-Benz","Mitsubishi","Nissan","Peugeot","Subaru","Tesla","Toyota",
    "Volkswagen","Volvo"
  ].sort((a, b) => a.localeCompare(b));

  const isFiltered = !!(filters.fuelType || filters.vehicleType || filters.seater || filters.brand);

  const clearFilter = () => {
    setFilters({ fuelType: "", vehicleType: "", seater: null, brand: "" });
    setCurrentPage(1);
  };

  return (
    <div className="col-span-2 h-full pb-37">
      <div className="relative bg-footer pb-7 h-full rounded-tr-xl rounded-br-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]">
        <div className="pl-25 pr-5">
          <div className="text-3xl text-amber-50 py-5 font-bold font-serif italic">
            Our Vehicles
          </div>

          <div className="text-2xl font-semibold text-amber-50 tracking-wide pt-1 pb-3 border-b-2 border-amber-50">
            Filter by
          </div>

          {isFiltered && (
            <div
              onClick={clearFilter}
              className="absolute top-18 right-3 text-white w-3/10 font-bold tracking-wide flex gap-2 justify-center items-center active:opacity-65 hover:opacity-90 cursor-pointer px-2 py-2 rounded-lg bg-[#909090]"
            >
              <div>Clear Filter</div>
              <div className="mt-1">
                <IoClose className="text-xl" />
              </div>
            </div>
          )}

          {/* fuel type */}
          <div className="flex flex-col py-3 border-b-2 border-amber-50">
            <div className="font-semibold text-amber-50 text-lg">Fuel Type</div>

            <div className="grid grid-cols-2 pt-5 pb-3 gap-5 text-amber-50">
              {fuelType.map((f) => (
                <label key={f} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.fuelType === f}
                    onChange={() => {
                      setFilters((prev) => ({
                        ...prev,
                        fuelType: prev.fuelType === f ? "" : f,
                      }));
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 accent-white"
                  />
                  <span>{f}</span>
                </label>
              ))}
            </div>
          </div>

          {/* vehicle type */}
          <div className="py-3 border-b-2 border-amber-50">
            <div className="text-lg text-amber-50 font-semibold">Vehicle Type</div>

            <div className="grid grid-cols-2 pt-5 pb-3 gap-5 text-amber-50">
              {vehicleType.map((v) => (
                <label key={v} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.vehicleType === v}
                    onChange={() => {
                      setFilters((prev) => ({
                        ...prev,
                        vehicleType: prev.vehicleType === v ? "" : v,
                      }));
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 accent-white"
                  />
                  <span>{v}</span>
                </label>
              ))}
            </div>
          </div>

          {/* seater */}
          <div className="flex flex-col py-3 border-b-2 border-amber-50">
            <div className="text-amber-50 font-semibold text-lg">Seater</div>

            <div className="grid grid-cols-2 pt-5 pb-3 gap-5 text-amber-50">
              {seater.map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.seater === s}
                    onChange={() => {
                      setFilters((prev) => ({
                        ...prev,
                        seater: prev.seater === s ? null : s,
                      }));
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 accent-white"
                  />
                  <span>{s}-Seater</span>
                </label>
              ))}
            </div>
          </div>

          {/* brand */}
          <div className="flex flex-col py-3">
            <div className="text-amber-50 font-semibold text-lg">Brand</div>

            <div className="grid grid-cols-2 pt-5 pb-3 gap-5 text-amber-50">
              {brands.map((b) => (
                <label key={b} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.brand === b}
                    onChange={() => {
                      setFilters((prev) => ({
                        ...prev,
                        brand: prev.brand === b ? "" : b,
                      }));
                      setCurrentPage(1);
                    }}
                    className="w-4 h-4 accent-white"
                  />
                  <span>{b}</span>
                </label>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FilterCar;