import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  return (
    <div className="h-[400px] bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 w-full flex flex-col justify-center items-center text-white rounded-xl mt-8 shadow-xl">
      <section className="flex w-1/2 max-w-[600px]">
        <input
          className="h-10 w-[80%] rounded-tl rounded-bl px-4 placeholder:text-center placeholder:font-bold text-black border-none outline-none shadow-md focus:ring-8 focus:ring-blue-500"
          type="text"
          placeholder="Enter product title"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          className="bg-[#1976D2] p-2 rounded-tr rounded-br"
          onClick={() => {
            navigate(`/?search=${searchValue}`);
            window.location.reload();
          }}
        >
          Search
        </button>
      </section>
    </div>
  );
};

export default Filter;
