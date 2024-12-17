import React from "react";
import { useTranslation } from "react-i18next";

interface SearchBarProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  handleSearchChange,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-4 w-full">
      <input
        type="text"
        placeholder={t("Search for cars, categories, or fuel types...")}
        value={searchTerm}
        onChange={handleSearchChange}
        className={`${i18n.language === "ar" ? "text-right" : "text-left"} w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500`}
      />
      {/* You can remove the search button now since the search is happening dynamically */}
    </div>
  );
};

export default SearchBar;
