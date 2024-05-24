import { useState } from "react";
import PaginationBar from "../components/PaginationBar";
import RecordCard from "../components/RecordCard";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);

  return (
    <div className="min-h-screen bg-teal-400/75 flex flex-col justify-center items-center">
      <SearchBar
        setPagination={setPagination}
        setResults={setResults}
      />
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
