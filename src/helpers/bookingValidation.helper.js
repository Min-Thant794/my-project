export const validateBookingInput = ({ carId, startDate, endDate }) => {
    if(!carId) return console.log("Please select a car.");

    if(!startDate || !endDate) return "Please select both start and end dates";

    const newStartDate = new Date(startDate);
    const newEndDate = new Date(endDate);

    if(Number.isNaN(newStartDate.getTime()) || Number.isNaN(newEndDate.getTime())) return "Invalid date format.";

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    if(newStartDate < tomorrow) return "Booking must start from tomorrow or later.";

    if(newEndDate <= newStartDate) return "End date msut be after start date.";

    const maxFuture = new Date();
    maxFuture.setMonth(maxFuture.getMonth() + 3);

    if(newStartDate > maxFuture) {
        return console.log("Booking can only be made up to 3 months in advance.");
    }

    return null; //all pass (valid)
}