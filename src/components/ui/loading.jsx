const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader relative grid overflow-hidden w-10 h-20 border-t-4 border-b-4 border-[#673b14] bg-center bg-no-repeat bg-[length:7px_8px] animate-spin-slow">
        <div className="before-element absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[calc(50%-4px)] border-x-2 border-b-2 border-[#673b14] rounded-b-[40%]"></div>
        <div className="after-element absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[calc(50%-4px)] border-x-2 border-t-2  border-[#673b14] rounded-t-[40%]"></div>
      </div>
    </div>
  );
};

export default Loader;
