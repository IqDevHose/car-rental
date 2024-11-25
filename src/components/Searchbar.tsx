"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchManufacturer from "../components/SearchManufacturer";

const SearchButton = () => (
  <button type="submit" className={`-ml-3 z-10 `}>
    <img
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isOpenMake, setIsOpenMake] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    navigate(newPathname);
  };

  return (
    <div className="searchbar flex gap-x-4">
      <div className="relative">
        <button
          onBlur={() => {
            setIsOpenMake(!isOpenMake);
            setIsOpenModel(false);
          }}
          onClick={() => {
            setIsOpenMake(!isOpenMake);
            setIsOpenModel(false);
          }}
          className="inline-flex items-center justify-between overflow-hidden w-[200px] border-b bg-white"
        >
          <p className="px-4 py-2 text-sm/none text-gray-600 ">Make</p>

          <button className="h-full p-2 text-gray-600 ">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </button>

        <div
          className={`absolute ${
            isOpenMake ? "opacity-1" : "opacity-0"
          }  end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg`}
          role="menu"
        >
          <ul className="p-2">
            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Chevrolet
            </li>

            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Cadillac
            </li>

            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Dodge
            </li>

            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Land Rover
            </li>
            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Nissan
            </li>
            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Lexus
            </li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <button
          onBlur={() => {
            setIsOpenModel(false);
          }}
          onClick={() => {
            setIsOpenModel(!isOpenModel);
            setIsOpenMake(false);
          }}
          className="inline-flex items-center overflow-hidden w-[200px] justify-between border-b bg-white"
        >
          <p className="px-4 py-2 text-sm/none text-gray-600 ">Model</p>

          <button className="h-full p-2 text-gray-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </button>

        <div
          className={`absolute ${
            isOpenModel ? "opacity-1" : "opacity-0"
          }  end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg`}
          role="menu"
        >
          <ul className="p-2">
            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Model 1
            </li>

            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Model 2
            </li>

            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Model 3
            </li>

            <li
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              Model 4
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
