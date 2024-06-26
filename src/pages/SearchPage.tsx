import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import PaginationBar from "../components/PaginationBar";
import RecordCard from "../components/RecordCard";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);

  function getOrCreateUrl(
    params?: searchParams,
    endpoint?: string
  ): string {
    if (endpoint) return endpoint;
    if (params) {
      const { releaseTitle, barcode, artist } = params;
      return `http://localhost:8080/api-discogs?release_title=${releaseTitle}&barcode=${barcode}&artist=${artist}`;
    }
    console.error("No search parameters or endpoint provided");
    throw new Error("No search parameters or endpoint provided");
  }

  const doSearch = (params?: searchParams, endpoint?: string): void => {
    axios
      .get<ApiResponseSubset>(getOrCreateUrl(params, endpoint))
      .then((response: AxiosResponse<ApiResponseSubset>) => {
        setResults(response.data.results);
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
