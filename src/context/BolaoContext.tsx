import { api } from "api";
import React, { useContext, useMemo, useState } from "react";
import { IBolao, ICategory } from "types";

export type BolaoContextType = {
  categories: ICategory[];
  currentBolao: IBolao;
  isLoading: boolean;
  hits: number;
  mistakes: number;
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
  const [hits, setHits] = useState<number>(0);
  const [mistakes, setMistakes] = useState<number>(0);

  const getCategories = async () => {
    const { data } = await api.get("/");

    setCategories(data.categories);
    verifyPoints(getBolaoLocalStorage("dataBolaoOscar2023"), data.categories);
    setIsLoading(false);
  };

  const saveBolaoLocalStorage = (key: string, bolao: IBolao) => {
    setCurrentBolao(bolao);
    localStorage.setItem(key, JSON.stringify(bolao));
  };

  const getBolaoLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string);
  };

  const verifyPoints = (bolao: IBolao, categories: ICategory[]) => {
    const winners = categories.reduce((acc, category) => {
      const key = category.title.replace(/\s/g, "");
      const winner = category.nominees.find(
        (nominee) => nominee.isWinner
      )?.name;
      return { ...acc, [key]: winner };
    }, {});

    let hits = 0;
    let mistakes = 0;

    for (const categoryKey in bolao) {
      // eslint-disable-next-line no-prototype-builtins
      if (winners.hasOwnProperty(categoryKey)) {
        //@ts-ignore
        if (bolao[categoryKey] === winners[categoryKey]) {
          hits++;
          //@ts-ignore
        } else if (winners[categoryKey]) {
          mistakes++;
        }
      }
    }

    setHits(hits);
    setMistakes(mistakes);
  };

  React.useEffect(() => {
    getCategories();

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
  }, []);

  const values = useMemo(() => {
    return {
      categories,
      currentBolao,
      isLoading,
      hits,
      mistakes,
      saveBolaoLocalStorage,
      getBolaoLocalStorage,
    };
  }, [
    categories,
    currentBolao,
    isLoading,
    hits,
    mistakes,
    saveBolaoLocalStorage,
    getBolaoLocalStorage,
  ]);

  return (
    <BolaoContext.Provider value={values}>{children}</BolaoContext.Provider>
  );
};

export const useBolaoContext = () => useContext(BolaoContext);
