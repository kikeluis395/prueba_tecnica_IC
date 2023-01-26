import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const searchTasks = (data) => {
    return data.filter(
      (e) =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase())
    );
  };
  return {
    search,
    searchTasks,
    setSearch,
  };
};
export default useSearch;
