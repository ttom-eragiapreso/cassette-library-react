import React from "react";

const RecordCard: React.FC<Result> = (result) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2">
      <h2 className="text-xl font-bold mb-2">{result.title}</h2>
      <p className="text-gray-600 mb-2">{result.country}</p>
      <p className="text-gray-600">{result.year}</p>
      <img
        src={result.cover_image ? result.cover_image : result.thumb}
        alt={result.title}
      />
      {result.label && (
        <>
          <p className="font-bold">Labels</p>
          <ul>
            {result.label.map((label: string) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </>
    )}
      {result.style && (
        <>
          <p className="font-bold">Styles</p>
          <ul>
            {result.style.map((style: string) => (
              <li key={style}>{style}</li>
            ))}
          </ul>
        </>
    )}
    </div>
  );
};

export default RecordCard;
