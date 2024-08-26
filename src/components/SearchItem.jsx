import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Home from "./Home";

export default function SearchItem() {
  let { term } = useParams();

  let [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      let data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    };
    filteredData();
  }, []);

  return <Home items={filterData} />;
}
