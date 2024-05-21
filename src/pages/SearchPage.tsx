import axios, { AxiosResponse } from "axios";
import { useState } from "react";

const SearchPage = () => {
  const discogsToken: string = "HWiFdStcHwaqgBqEAoEjjvCFhQUNnZHqZFuelXuZ";
  const releaseTitle: string = "stadium arcadium";
  const baseCall: string = `https://api.discogs.com/database/search?token=${discogsToken}&release_title=${releaseTitle}`;

  const [results, setResults] = useState<Result[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);
  
  const doSearch = (): void => {
    axios
      .get<ApiResponseSubset>(baseCall, {
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
      })
      .finally(() => {
        // not sure why results and pagination are empty if I log them here
      }
    );
  }
  return (
  <div className="h-screen bg-teal-400/75 flex justify-center items-center">
    <button onClick={doSearch}>Try</button>
    <p>Page: {pagination.page} of {pagination.pages}</p>
  </div>
);
};
export default SearchPage;
