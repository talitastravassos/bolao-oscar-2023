import { api } from "api";
import React, { useContext, useMemo, useState } from "react";
import { Categories } from "types";

export type BolaoContextType = {
  categories: Categories[];
};

interface IProps {
  children?: React.ReactNode;
}

const BolaoContext = React.createContext<BolaoContextType>(
  {} as BolaoContextType
);

const BolaoProvider = ({ children }: IProps) => {
  const [categories, setCategories] = useState<Categories[]>(
    [] as Categories[]
  );

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

export default BolaoProvider;

export const useBolaoContext = () => useContext(BolaoContext);
