import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const SearchBar: React.FC<SearchBarProps> = ({ setResults, setPagination }) => {
  const [releaseTitle, setReleaseTitle] = useState<string>("");
  const [barcode, setBarcode] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const discogsToken: string = "HWiFdStcHwaqgBqEAoEjjvCFhQUNnZHqZFuelXuZ";
  const baseEndpoint: string = "https://api.discogs.com/database/search";

  const doSearch = (): void => {
    axios
      .get<ApiResponseSubset>(baseEndpoint, {
        headers: {
          "User-Agent": "foo/3.0"
        },
        params: {
          token: discogsToken,
          release_title: releaseTitle,
          barcode: barcode,
          artist: artist
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
    <div className="border-2 border-red-500 flex">
      <input
        type="text"
        placeholder="Search by release title"
        value={releaseTitle}
        onKeyUp={(e) => {
          if (e.key === "Enter") doSearch();
        }}
        onChange={(e) => setReleaseTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by barcode"
        value={barcode}
        onKeyUp={(e) => {
          if (e.key === "Enter") doSearch();
        }}
        onChange={(e) => setBarcode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by artist"
        value={artist}
        onKeyUp={(e) => {
          if (e.key === "Enter") doSearch();
        }}
        onChange={(e) => setArtist(e.target.value)}
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
