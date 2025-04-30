export const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "info", label: "Info" },
    { id: "player", label: "Player" },
    { id: "comments", label: "Comments" },
  ];

  return (
    <nav className="grid grid-cols-3 w-full mt-10 text-2xl font-medium border-b border-[#E5E5E5] px-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`w-full text-center mx-auto pb-5 ${
            activeTab === tab.id
              ? "text-red-500 border-b-2 border-[#DA6049]"
              : "text-neutral-900"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};
