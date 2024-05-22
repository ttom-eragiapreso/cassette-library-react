type NavLinkPropsSimple = {
  to: string;
  text: string;
};

type Result = {
  id: number;
  title: string;
  year: string;
  country: string;
  thumb: string;
};

type Pagination = {
  page: number;
  pages: number;
  per_page: number;
  items: number;
};

type ApiResponseSubset = {
  pagination: Pagination;
  results: Array<Result>;
  status: number;
};
