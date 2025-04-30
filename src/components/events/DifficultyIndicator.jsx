export const DifficultyIndicator = ({ difficulty }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex items-end gap-px w-10">
      {[2, 3.5, 5, 6.5].map((height, i) => (
        <div
          key={i}
          className={`w-1.5 ${
            i < difficulty.value ? "bg-emerald-300" : "bg-emerald-100"
          }`}
          style={{ height: `${height * 4}px` }}
        />
      ))}
    </div>
    <span className="text-2xl text-neutral-600">{difficulty.level}</span>
  </div>
);
