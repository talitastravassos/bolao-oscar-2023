import React from "react";
import { OptionsStyled } from "./styles";

type OptionsProps = {
  options: string[];
  selectedOption: string;
  onOptionSelected: (option: string) => void;
};

const Options: React.FC<OptionsProps> = ({
  options,
  selectedOption,
  onOptionSelected,
}) => {
  return (
    <OptionsStyled>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={(e) => onOptionSelected(e.target.value)}
          />
          {option}
        </label>
      ))}
    </OptionsStyled>
  );
};

export default Options;
