export interface Categories {
  id: string;
  title: string;
  nominees: Nominee[];
}

export interface Nominee {
  id: string;
  name?: string;
  producers?: null | string;
  isWinner?: boolean;
  movie?: string;
  title?: string;
  from?: string;
}
