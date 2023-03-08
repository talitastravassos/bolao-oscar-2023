import { api } from "api";
import React, { useContext, useMemo, useState } from "react";
import { ICategory } from "types";

export type BolaoContextType = {
  categories: ICategory[];
};

interface IProps {
  children?: React.ReactNode;
}

const BolaoContext = React.createContext<BolaoContextType>(
  {} as BolaoContextType
);

export const BolaoProvider = ({ children }: IProps) => {
  const [categories, setCategories] = useState<ICategory[]>([] as ICategory[]);

  const getCategories = async () => {
    const { data } = await api.get("/");

    setCategories(data.categories);
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  const values = useMemo(() => {
    return {
      categories,
    };
  }, [categories]);

  return (
    <BolaoContext.Provider value={values}>{children}</BolaoContext.Provider>
  );
};

export const useBolaoContext = () => useContext(BolaoContext);
