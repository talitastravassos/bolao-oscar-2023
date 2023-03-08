import { Field } from "formik";
import { ICategory } from "types";
import { CategoryStyled, OptionsStyled } from "./styles";

type CategoryProps = {
  name: string;
  label: string;
  category: ICategory;
};

export const Category = ({ name, category, label }: CategoryProps) => {
  return (
    <CategoryStyled>
      <h3>{label}</h3>
      <OptionsStyled>
        {category?.nominees?.map((option) => (
          <label key={option.id}>
            <Field
              type="radio"
              value={option.name || option.title}
              name={name}
            />
            {option.name || option.title} {option.movie && `(${option.movie})`}
          </label>
        ))}
      </OptionsStyled>
    </CategoryStyled>
  );
};
