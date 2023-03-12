import { useEffect, useState } from "react";
import { DownLine } from "../svgIcons";

const Category = () => {
  const [onDown, setOnDown] = useState(false);
  let title = "Down Category";
  useEffect(() => {
    if (onDown) {
      title = "Up Category";
    } else {
      title = "Down Category";
    }
  }, [onDown]);

  return (
    <div className="flex justify-between items-center text-light-gray">
      <button onClick={() => setOnDown(!onDown)}>
        <DownLine />
      </button>
      <h3>{title}</h3>
    </div>
  );
};

export default Category;
