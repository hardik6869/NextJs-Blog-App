import Post from "./Post";

const SearchResults = ({ results }) => {
  if (results.length === 0) return "";
  return (
    <div className="absolute top-20 right-0 md:right-10 z-10 border-2 shadow-lg border-gray-500 bg-white text-black w-full md:w-5/12 rounded-xl">
      <div className="p-5">
        <h2 className="text-3xl ">{results.length} Results</h2>
        {results.map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
