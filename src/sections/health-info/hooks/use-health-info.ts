import { useState } from "react";
import { info } from "../data/health-info.mock";

const useHealthInfo = () => {
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("Prevención");

  const filteredInfo = info.filter((item) => {
    const matchesFilter = item.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesCategory = category ? item.category === category : true;
    if (filter) return matchesFilter;
    return matchesCategory;
  });

  return { filter, setFilter, category, setCategory, filteredInfo };
};

export default useHealthInfo;
