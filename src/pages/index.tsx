import { Header } from "components/Header";
import { Main } from "components/Main";
import { useBolaoContext } from "context/BolaoContext";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  const { categories } = useBolaoContext();

  React.useEffect(() => {
    console.log({ categories });
  }, [categories]);

  // const handleOptionSelected = (option: string) => {
  //   setSelectedOption(option);
  // };

  return (
    <div>
      <Header />
      <Main categories={categories} />
    </div>
  );
};

export default Home;
