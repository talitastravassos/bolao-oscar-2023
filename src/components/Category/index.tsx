import { useState } from "react";
import Options from "./Options";
import { CategoryStyled } from "./styles";

type CategoryProps = {
  name: string;
  options: string[];
  onOptionSelected: (option: string) => void;
};

export const Category = ({
  name,
  options,
  onOptionSelected,
}: CategoryProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <CategoryStyled>
      <h3>{name}</h3>
      <Options
        options={options}
        selectedOption={selectedOption}
        onOptionSelected={handleOptionSelected}
      />
      <p>Selected option: {selectedOption}</p>
    </CategoryStyled>
  );
};
