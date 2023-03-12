import Care from "./Care";
import FButton from "./FButton";
import FSelect from "./FSelect";

const Filter = () => {
  return (
    <div className="w-1/3 p-6 bg-dark-white">
      <h1 className="text-secondary font-bold text-title-3 pb-2">Filters</h1>
      <div className="my-[5px] flex items-center">
        <FButton title="100% Organic" />
        <FButton title="TWER" />
      </div>
      <Care />
      <FSelect title="Brands" />
      <FSelect title="Concerns" />
      <FSelect title="Key Features" />
    </div>
  );
};

export default Filter;
