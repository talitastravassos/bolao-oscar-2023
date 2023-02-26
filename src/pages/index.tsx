import Category from "components/Category";
import { NextPage } from "next";
import { useState } from "react";

const options = ["Option 1", "Option 2", "Option 3"];

const Home: NextPage = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Category
        options={options}
        name="Category"
        // selectedOption={selectedOption}
        onOptionSelected={handleOptionSelected}
      />
    </div>
  );
};

export default Home;
