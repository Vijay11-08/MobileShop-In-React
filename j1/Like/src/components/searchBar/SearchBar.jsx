import { useState } from "react";

// Updated Search Data (No Images)
const searchData = [
  { name: 'Mobile' },
  { name: 'Mobile Accessories' },
  { name: 'Headphones' },
  { name: 'Laptop' },
  { name: 'Smartwatch' },
  { name: 'Charger' },
  { name: 'Book' },
];

const SearchBar = () => {
   // Search State 
   const [search, setSearch] = useState("");

   // Filter Search Data
   const filterSearchData = searchData
       .filter((obj) => obj.name.toLowerCase().includes(search))
       .slice(0, 8);

  return (
    <div className="">
      {/* search input  */}
      <div className="input flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black"
        />
      </div>

      {/* search drop-down  */}
      <div className="flex justify-center">
        {search && (
          <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ? (
              filterSearchData.map((item, index) => (
                <div key={index} className="py-2 px-2 hover:bg-gray-300 rounded-md cursor-pointer">
                  {item.name}
                </div>
              ))
            ) : (
              <div className="text-center py-2 text-gray-600">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
