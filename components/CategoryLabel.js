import Link from "next/link";

const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: "orange",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  };

  return (
    <div
      className={`px-2 py-1 text-gray-100 font-bold rounded`}
      style={{ background: `${colorKey[children[1]]}` }}
    >
      <Link href={`/blog/category/${children[1].toLowerCase()}`}>
        {children[1]}
      </Link>
    </div>
  );
};

export default CategoryLabel;
