import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const SearchBar: React.FC<SearchBarProps> = ({ doSearch }) => {
  const [releaseTitle, setReleaseTitle] = useState<string>("");
  const [barcode, setBarcode] = useState<string>("");
  const [artist, setArtist] = useState<string>("");

  return (
    <div className="border-2 border-red-500 flex">
      <input
        type="text"
        placeholder="Search by release title"
        value={releaseTitle}
        onKeyUp={(e) => {
          if (e.key === "Enter")
            doSearch({
              releaseTitle,
              barcode,
              artist
            });
        }}
        onChange={(e) => setReleaseTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by barcode"
        value={barcode}
        onKeyUp={(e) => {
          if (e.key === "Enter")
            doSearch({
              releaseTitle,
              barcode,
              artist
            });
        }}
        onChange={(e) => setBarcode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by artist"
        value={artist}
        onKeyUp={(e) => {
          if (e.key === "Enter")
            doSearch({
              releaseTitle,
              barcode,
              artist
            });
        }}
        onChange={(e) => setArtist(e.target.value)}
      />
      <Button
        text="Try!"
        icon={<FaSearch />}
        iconPosition="after"
        actionFunction={() =>
          doSearch({ releaseTitle, barcode, artist }, undefined)
        }
      />
    </div>
  );
};

export default SearchBar;
