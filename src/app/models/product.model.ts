export interface Product {
  total:    number;
  page:     number;
  per_page: number;
  results:  Result[];
}

export interface Result {
  code:      string;
  name:      string;
  url_image: string;
  value:     number;
  tax:       number[];
}

