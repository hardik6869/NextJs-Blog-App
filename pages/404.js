import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center mt-28">
      <Image
        src="/images/logo.png"
        alt=""
        width={70}
        height={70}
        className="bg-gray-800 rounded-2xl"
      />

      <h3 className="text-6xl my-5 font-mono "> Whoops! </h3>
    </div>
  );
};

export default PageNotFound;
