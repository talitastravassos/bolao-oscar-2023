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

export interface IBolao {
  BestPicture: string;
  BestDirector: string;
  BestLeadActor: string;
  BestLeadActress: string;
  BestSupportingActor: string;
  BestSupportingActress: string;
  BestAdaptedScreenplay: string;
  BestOriginalScreenplay: string;
  BestCinematography: string;
  BestFilmEditing: string;
  BestInternationalFeatureFilm: string;
  BestAnimatedFeatureFilm: string;
  BestVisualEffects: string;
  BestOriginalSong: string;
}
