import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="wrapper-search">
      <form className="mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 mx-auto text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative mx-auto">
          <div className="flex  absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-black-900 bg-gray-50 rounded-lg border focus:outline-none border-gray-300  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black "
            placeholder="Search Lectures, Books..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 btn-color     font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
