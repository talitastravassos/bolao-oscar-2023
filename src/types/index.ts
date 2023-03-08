export interface ICategory {
  id: string;
  title: string;
  nominees: INominee[];
}

export interface INominee {
  id: string;
  name: string;
  producers?: null | string;
  isWinner?: boolean;
  movie?: string;
  title?: string;
  from?: string;
}
