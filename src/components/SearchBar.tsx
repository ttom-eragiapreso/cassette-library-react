import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const SearchBar: React.FC<SearchBarProps> = ({ setResults, setPagination }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const discogsToken: string = "HWiFdStcHwaqgBqEAoEjjvCFhQUNnZHqZFuelXuZ";
  const baseCall: string = "https://api.discogs.com/database/search";

  const doSearch = (): void => {
    axios
      .get<ApiResponseSubset>(baseCall + searchTerm, {
        headers: {
          "User-Agent": "foo/3.0",
        },
        params: {
          token: discogsToken,
          release_title: searchTerm,
        },
      })
      .then((response: AxiosResponse<ApiResponseSubset>) => {
        setResults(response.data.results);
        setPagination(response.data.pagination);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <div className="border-2 border-red-500 flex">
      <input
        type="text"
        placeholder="Search by release title"
        value={searchTerm}
        onKeyUp={(e) => {
          if (e.key === "Enter") doSearch();
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        text="Try!"
        icon={<FaSearch />}
        iconPosition="after"
        actionFunction={doSearch}
      />
    </div>
  );
};

export default SearchBar;
