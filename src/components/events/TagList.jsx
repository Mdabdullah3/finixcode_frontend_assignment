// TagList.jsx
export const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-4 items-center">
    {tags.map((tag) => (
      <span
        key={tag.label}
        className="px-6 py-5 text-2xl rounded-[48px]"
        style={{ backgroundColor: tag.color }}
      >
        {tag.label}
      </span>
    ))}
  </div>
);
