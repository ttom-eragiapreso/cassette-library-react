import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import PaginationBar from "../components/PaginationBar";
import RecordCard from "../components/RecordCard";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);
  const discogsToken = "HWiFdStcHwaqgBqEAoEjjvCFhQUNnZHqZFuelXuZ";
  const baseEndpoint = `https://api.discogs.com/database/search?token=${discogsToken}&release_title=${releaseTitle}&barcode=${barcode}&artist=${artist}`;
  const doSearch = (endpoint?: string): void => {
    axios
      .get<ApiResponseSubset>(endpoint || baseEndpoint, {
        headers: {
          "User-Agent": "foo/3.0"
        }
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
    <div className="min-h-screen bg-teal-400/75 flex flex-col justify-center items-center">
      <SearchBar doSearch={doSearch} />
      <div className="mt-4 grid grid-cols-6 gap-4 md:grid-cols-4 sm:grid-cols-2">
        {results.map((result: Result) => {
          return (
            <RecordCard
              key={result.id}
              {...result}
            />
          );
        })}
      </div>
      <PaginationBar {...pagination} />
    </div>
  );
};
export default SearchPage;

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
  throw new Error("No search parameters or endpoint provided");
}
