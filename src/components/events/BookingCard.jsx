export const BookingCard = ({ spotsLeft, price, priceNote }) => (
  <aside className="   mx-auto p-6 bg-white rounded-2xl min-w-60 w-[400px]">
    <div className="flex justify-between items-center p-4 w-full border border-[#E5E5E5] rounded-xl">
      <span className="text-base font-medium text-red-500">
        {spotsLeft} spots left
      </span>
      <span className="text-lg font-bold">
        {price}tk /player{" "}
        <span className="text-sm font-normal text-gray-500">{priceNote}</span>
      </span>
    </div>
    <button className="w-full p-4 mt-6 text-lg font-bold bg-primary rounded-full">
      Join event
    </button>
  </aside>
);
