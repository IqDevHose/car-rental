import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";

interface Option {
  title: string;
  value: string;
}

interface CustomFilterProps {
  title: string;
  options: Option[];
}

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Option>(options[0]); // State for storing the selected option

  // Update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (option: Option) => {};

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(option: Option) => {
          setSelected(option); // Update the selected option in state
          handleUpdateParams(option); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className="relative w-fit z-10">
          {/* Button for the listbox */}
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <img
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </Listbox.Button>

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // Group multiple elements without introducing an additional DOM node
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {/* Map over the options and display them as listbox options */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
