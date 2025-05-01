import { tabs } from "@/lib/constant";
export const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <section className="md:px-10 px-5">
      <nav className="grid grid-cols-3 w-full mt-10 md:text-2xl text-lg font-medium border-b border-[#E5E5E5] ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-full text-center mx-auto pb-5 cursor-pointer ${
              activeTab === tab.id
                ? "text-[#DA6049] border-b-2 border-[#DA6049]"
                : "text-neutral-900"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </section>
  );
};
