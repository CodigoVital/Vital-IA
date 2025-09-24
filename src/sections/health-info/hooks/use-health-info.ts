import { useState } from "react";
import { info } from "../data/health-info.mock";

const useHealthInfo = () => {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  const filteredInfo = info.filter(
    (item) =>
      item.title.toLowerCase().includes(filter.toLowerCase()) &&
      (category ? item.category === category : true)
  );

  return { filter, setFilter, category, setCategory, filteredInfo };
};

export default useHealthInfo;
