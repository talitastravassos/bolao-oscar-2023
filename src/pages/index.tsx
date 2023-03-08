import { Header } from "components/Header";
import { Main } from "components/Main";
import { useBolaoContext } from "context/BolaoContext";
import { NextPage } from "next";
import React from "react";

// const options = ["Option 1", "Option 2", "Option 3"];

const Home: NextPage = () => {
  // const [selectedOption, setSelectedOption] = useState(options[0]);
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
