export interface BaseBook {
  Author: string;
  Title: string;
  Pages: number;
  description: string;
  image: string;
}

export interface Book extends BaseBook {
  id: number;
}
