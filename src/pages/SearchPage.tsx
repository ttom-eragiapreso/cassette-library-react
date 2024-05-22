import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "../components/Button";
import RecordCard from "../components/RecordCard";

const SearchPage = () => {
  const discogsToken: string = "HWiFdStcHwaqgBqEAoEjjvCFhQUNnZHqZFuelXuZ";
  const releaseTitle: string = "stadium arcadium";
  const baseCall: string = `https://api.discogs.com/database/search?token=${discogsToken}&release_title=`;

  const [results, setResults] = useState<Result[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const doSearch = (): void => {
    axios
      .get<ApiResponseSubset>(baseCall + searchTerm, {
        headers: {
          "User-Agent": "foo/3.0",
        },
      })
      .then((response: AxiosResponse<ApiResponseSubset>) => {
        setResults(response.data.results);
        setPagination(response.data.pagination);
        // the reason why the logs weren't working in the finally block is that state change is not immediate but it's scheduled.
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <div className="h-screen bg-teal-400/75 flex justify-center items-center">
      <Button
        text="Try!"
        icon={<FaSearch />}
        iconPosition="after"
        ctaFunction={doSearch}
      />
      <input
        type="text"
        placeholder="Search by release title"
        value={searchTerm}
        onKeyUp={(e) => {
          if (e.key === "Enter") doSearch();
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-wrap">
        {results.map((result: Result) => {
          return (
            <RecordCard
              key={result.id}
              {...result}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SearchPage;
