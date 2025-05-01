import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const GoodToKnowSection = () => {
  return (
    <section className="flex flex-col self-stretch md:py-16 py-8 border-b border-[#E5E5E5] max-w-[900px]">
      <h1 className="text-3xl font-bold text-neutral-900">Good to know</h1>
      <div className="flex flex-wrap gap-3 items-start mt-8 w-full max-md:max-w-full">
        {/* Highlights Card */}
        <div className="pt-6 pr-9 pb-14 pl-6 bg-[#DA6049] rounded-2xl min-h-[250px] w-[300px] max-md:px-5 max-md:w-full">
          <h2 className="text-2xl font-bold text-white">Highlights</h2>
          <div className="mt-4 w-full text-lg font-medium text-white">
            <InfoItem icon={<FaCalendarAlt size={18} />} text="Mon, 2 Dec" />
            <div className="mt-2.5">
              <InfoItem icon={<FaClock size={18} />} text="7.30 AM - 8.30 AM" />
            </div>
            <div className="mt-2.5">
              <InfoItem
                icon={<FaClock size={18} />}
                text="Arrive 15 min before start"
              />
            </div>
            <div className="mt-2.5">
              <InfoItem
                icon={<FaCheckCircle size={18} />}
                text="Venue booked"
              />
            </div>
          </div>
        </div>
        {/* Refund Policy Card */}
        <div className="pt-6 pr-9 pb-14 pl-6 bg-[#34735F] rounded-2xl min-h-[250px] w-[523px] max-md:px-5 max-md:w-full">
          <h2 className="text-2xl font-bold text-white">
            Refund & cancellation policy
          </h2>
          <ul className="mt-4 text-lg font-medium text-white list-disc pl-5 space-y-2">
            <li>Full refund if host cancels the game</li>
            <li>Full refund if you cancel 24+ hours in advance</li>
            <li>Full refund if game is cancelled due to low attendance</li>
          </ul>
          <a
            href="#"
            className="flex justify-end gap-2 mt-4 text-base text-white"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};
// Reusable InfoItem component for displaying information items in GoodToKnowSection 
const InfoItem = ({ icon, text }) => {
  return (
    <div className="flex gap-2 items-center w-full">
      <div className="text-white">{icon}</div>
      <p className="text-white">{text}</p>
    </div>
  );
};
export default GoodToKnowSection;
