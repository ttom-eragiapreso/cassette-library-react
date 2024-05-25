type NavLinkPropsSimple = {
  to: string;
  text: string;
};

type Result = {
  id: number;
  type: string;
  title: string;
  year: string;
  country: string;
  thumb: string;
  cover_image: string;
  resource_url: string;
  label: Array<string>;
  genre: Array<string>;
  style: Array<string>;
};

type Pagination = {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: { last?: string; next?: string; first?: string; prev?: string };
};

type ApiResponseSubset = {
  pagination: Pagination;
  results: Array<Result>;
  status: number;
};

interface SearchBarProps {
  // setResults: React.Dispatch<React.SetStateAction<Result[]>>;
  // setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
  doSearch: (params?: searchParams, endpoint?: string) => void;
}

type searchParams = {
  releaseTitle: string;
  barcode: string;
  artist: string;
};
