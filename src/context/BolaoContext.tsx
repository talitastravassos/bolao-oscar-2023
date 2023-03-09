import { api } from "api";
import React, { useContext, useMemo, useState } from "react";
import { IBolao, ICategory } from "types";

export type BolaoContextType = {
  categories: ICategory[];
  currentBolao: IBolao;
  isLoading: boolean;
  saveBolaoLocalStorage: (key: string, bolao: IBolao) => void;
  getBolaoLocalStorage: (key: string) => IBolao;
};

interface IProps {
  children?: React.ReactNode;
}

const BolaoContext = React.createContext<BolaoContextType>(
  {} as BolaoContextType
);

export const BolaoProvider = ({ children }: IProps) => {
  const [categories, setCategories] = useState<ICategory[]>([] as ICategory[]);
  const [currentBolao, setCurrentBolao] = useState<IBolao>({} as IBolao);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCategories = async () => {
    const { data } = await api.get("/");

    setCategories(data.categories);
    setIsLoading(false);
  };

  const saveBolaoLocalStorage = (key: string, bolao: IBolao) => {
    setCurrentBolao(bolao);
    localStorage.setItem(key, JSON.stringify(bolao));
  };

  const getBolaoLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string);
  };

  React.useEffect(() => {
    const dataLocalBolao = getBolaoLocalStorage("dataBolaoOscar2023");

    if (dataLocalBolao) {
      setCurrentBolao(dataLocalBolao);
    } else {
      setCurrentBolao({
        BestPicture: "",
        BestDirector: "",
        BestLeadActor: "",
        BestLeadActress: "",
        BestSupportingActor: "",
        BestSupportingActress: "",
        BestAdaptedScreenplay: "",
        BestOriginalScreenplay: "",
        BestCinematography: "",
        BestFilmEditing: "",
        BestInternationalFeatureFilm: "",
        BestAnimatedFeatureFilm: "",
        BestVisualEffects: "",
        BestOriginalSong: "",
      });
    }
    getCategories();
  }, []);

  const values = useMemo(() => {
    return {
      categories,
      currentBolao,
      isLoading,
      saveBolaoLocalStorage,
      getBolaoLocalStorage,
    };
  }, [
    categories,
    currentBolao,
    isLoading,
    saveBolaoLocalStorage,
    getBolaoLocalStorage,
  ]);

  return (
    <BolaoContext.Provider value={values}>{children}</BolaoContext.Provider>
  );
};

export const useBolaoContext = () => useContext(BolaoContext);
