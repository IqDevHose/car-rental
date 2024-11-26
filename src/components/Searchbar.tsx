import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

// Define types for our data structures
type Vehicle = {
  make: string;
  models: string[];
};

type SearchBarProps = {
  onSearch?: (make: string, model: string) => void;
};

const vehicles: Vehicle[] = [
  {
    make: "Toyota",
    models: ["Camry", "Corolla", "RAV4", "Highlander"],
  },
  {
    make: "Honda",
    models: ["Civic", "Accord", "CR-V", "Pilot"],
  },
  {
    make: "BMW",
    models: ["3 Series", "5 Series", "X3", "X5"],
  },
  {
    make: "Mercedes",
    models: ["C-Class", "E-Class", "GLC", "GLE"],
  },
];

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [makeDropdownOpen, setMakeDropdownOpen] = useState(false);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);

  const handleMakeSelect = (make: string) => {
    setSelectedMake(make);
    setSelectedModel("");
    setMakeDropdownOpen(false);
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setModelDropdownOpen(false);
    onSearch?.(selectedMake, model);
  };

  const availableModels =
    vehicles.find((v) => v.make === selectedMake)?.models || [];

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto">
      {/* Make Selector */}
      <div className="relative flex-1">
        <button
          onClick={() => {
            setMakeDropdownOpen(!makeDropdownOpen);
            setModelDropdownOpen(false);
          }}
          className="w-full flex items-center justify-between px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm text-gray-700">
            {selectedMake || "Select Make"}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform ${
              makeDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {makeDropdownOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg">
            <ul className="py-1 max-h-60 overflow-auto">
              {vehicles.map((vehicle) => (
                <li
                  key={vehicle.make}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleMakeSelect(vehicle.make)}
                >
                  {vehicle.make}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Model Selector */}
      <div className="relative flex-1">
        <button
          onClick={() => {
            setModelDropdownOpen(!modelDropdownOpen);
            setMakeDropdownOpen(false);
          }}
          disabled={!selectedMake}
          className={`w-full flex items-center justify-between px-4 py-2 bg-white border rounded-lg shadow-sm transition-colors
            ${
              selectedMake
                ? "hover:bg-gray-50"
                : "opacity-50 cursor-not-allowed"
            }`}
        >
          <span className="text-sm text-gray-700">
            {selectedModel || "Select Model"}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform ${
              modelDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {modelDropdownOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg">
            <ul className="py-1 max-h-60 overflow-auto">
              {availableModels.map((model) => (
                <li
                  key={model}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleModelSelect(model)}
                >
                  {model}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Search Button */}
      <button
        onClick={() => onSearch?.(selectedMake, selectedModel)}
        disabled={!selectedMake || !selectedModel}
        className={`px-4 py-2 rounded-lg flex items-center justify-center
          ${
            selectedMake && selectedModel
              ? "bg-gray-700 hover:bg-blue-800 text-white"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }
        `}
      >
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SearchBar;
