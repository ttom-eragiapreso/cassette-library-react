import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import PaginationBar from "../components/PaginationBar";
import RecordCard from "../components/RecordCard";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);
  const discogsToken: string = "HWiFdStcHwaqgBqEAoEjjvCFhQUNnZHqZFuelXuZ";

  function getOrCreateUrl(
    discogsToken: string,
    params?: searchParams,
    endpoint?: string
  ): string {
    if (endpoint) return endpoint;
    if (params) {
      const { releaseTitle, barcode, artist } = params;
      return `https://api.discogs.com/database/search?token=${discogsToken}&release_title=${releaseTitle}&barcode=${barcode}&artist=${artist}`;
    }
    console.error("No search parameters or endpoint provided");
    throw new Error("No search parameters or endpoint provided");
  }

  const doSearch = (params?: searchParams, endpoint?: string): void => {
    axios
      .get<ApiResponseSubset>(getOrCreateUrl(discogsToken, params, endpoint), {
        headers: {
          "User-Agent": "foo/3.0"
        }
      })
      .then((response: AxiosResponse<ApiResponseSubset>) => {
        const filteredResults = response.data.results.filter((result: Result) => {
          return result.type === "release";
        })
        setResults(filteredResults);
        setPagination(response.data.pagination);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen bg-teal-400/75 flex flex-col justify-center items-center">
      <SearchBar doSearch={doSearch} />
      <div className="mt-4 grid grid-cols-6 gap-4 md:grid-cols-4 sm:grid-cols-2">
        {results.map((result: Result) => {
          return (
            <RecordCard
              key={result.id + result.title + result.type}
              {...result}
            />
          );
        })}
      </div>
      <PaginationBar
        pagination={pagination}
        actionFunction={doSearch}
      />
    </div>
  );
};
export default SearchPage;
