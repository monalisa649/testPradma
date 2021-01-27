export interface ProductsI {
  total:    number;
  page:     number;
  per_page: number;
  results:  Results[]
  }


export interface Results {
  code:      string;
  name:      string;
  url_image: string;
  value:     number;
  tax:       number[];
}

