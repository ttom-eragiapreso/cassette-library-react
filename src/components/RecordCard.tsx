import React from "react";

const RecordCard: React.FC<Result> = (result) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2">
      <h2 className="text-xl font-bold mb-2">{result.title}</h2>
      <p className="text-gray-600 mb-2">{result.country}</p>
      <p className="text-gray-600">{result.year}</p>
      <img
        src={result.thumb}
        alt={result.title}
      />
    </div>
  );
};

export default RecordCard;
