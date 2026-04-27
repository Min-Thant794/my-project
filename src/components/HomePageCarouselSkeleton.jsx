// HomePageCarouselSkeleton.jsx
const HomePageCarouselSkeleton = () => {
  return (
    <div className="relative w-full mx-auto mt-15 md:p-5 rounded-md flex flex-col items-center">
      <div className="w-full aspect-video rounded-3xl overflow-hidden relative shadow-gray-700 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] bg-gray-200">

        <div className="w-full h-full animate-shimmer bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[700px_100%]" />

        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent flex flex-col justify-end p-6">
          <div className="flex items-end justify-between">

            <div className="flex flex-col gap-2.5">
              <div className="h-[26px] w-44 rounded-md bg-white/30 animate-shimmer bg-linear-to-r from-white/20 via-white/40 to-white/20 bg-size-[700px_100%]" />
              <div className="h-3.5 w-64 rounded-md bg-white/30 animate-shimmer bg-linear-to-r from-white/20 via-white/40 to-white/20 bg-size-[700px_100%]" />
            </div>

            <div className="h-[38px] w-20 rounded-full bg-white/30 animate-shimmer bg-linear-to-r from-white/20 via-white/40 to-white/20 bg-size-[700px_100%]" />
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-3.5 h-3.5 rounded-full animate-shimmer bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 bg-size-[700px_100%] ${
                i === 0 ? "opacity-80" : "opacity-40"
              }`}
            />
          ))}
        </div>
      </div>

      <p className="mt-3 text-md font-bold text-gray-400 italic">
        Starting demo server… This may take up to 60 seconds on the free hosting plan.
      </p>
    </div>
  );
};

export default HomePageCarouselSkeleton;