const CarCardSkeleton = () => {
  return (
    <div className="flex flex-col w-full h-full gap-3 bg-[#d6d6d6] rounded-xl shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] px-5 pt-5">

      <div className="flex justify-between items-center">
        <div className="h-6 w-32 rounded-md animate-shimmer bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 bg-size-[700px_100%]" />
        <div className="w-2/5 flex justify-end">
          <div className="h-7 w-full rounded-full animate-shimmer bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 bg-size-[700px_100%]" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="h-7 w-5/11 rounded-full animate-shimmer bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 bg-size-[700px_100%]" />
        <div className="h-7 w-5/11 rounded-full animate-shimmer bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 bg-size-[700px_100%]" />
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="h-7 w-5/11 rounded-full animate-shimmer bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 bg-size-[700px_100%]" />
        <div className="h-7 w-5/11 rounded-full animate-shimmer bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 bg-size-[700px_100%]" />
      </div>

      <div className="w-full aspect-video my-5 rounded-xl animate-shimmer bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 bg-size-[700px_100%]" />
    
      <div className="h-9 w-full mb-5 rounded-full animate-shimmer bg-linear-to-r from-gray-400 via-gray-300 to-gray-400 bg-size-[700px_100%]" />

    </div>
  );
};

export default CarCardSkeleton;