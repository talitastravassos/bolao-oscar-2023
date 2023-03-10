import { useBolaoContext } from "context/BolaoContext";
import { Field } from "formik";
import { ICategory, INominee } from "types";
import { CategoryStyled, LabelStyled, OptionsStyled } from "./styles";

type CategoryProps = {
  name: string;
  label: string;
  category: ICategory;
  disabled?: boolean;
};

export const Category = ({
  name,
  category,
  label,
  disabled,
}: CategoryProps) => {
  const { currentBolao } = useBolaoContext();

  const verifyLoser = (option: INominee) => {
    const hasCategoryAWinner = category.nominees.filter(
      (nominee) => nominee.isWinner
    )[0];

    //@ts-ignore
    const choosenUser = currentBolao[category.title.replace(/\s/g, "")];

    if (!hasCategoryAWinner) return false;

    if (
      hasCategoryAWinner &&
      option.name === choosenUser &&
      hasCategoryAWinner.name !== choosenUser
    ) {
      return true;
    }

    return false;
  };

  return (
    <CategoryStyled>
      <h3>{label}</h3>
      <OptionsStyled>
        {category?.nominees?.map((option) => (
          <LabelStyled
            key={option.id}
            isWinner={!!option.isWinner}
            isLoser={verifyLoser(option)}
          >
            <Field
              type="radio"
              value={option.name || option.title}
              name={name}
              disabled={disabled}
            />
            {option.name || option.title} {option.movie && `(${option.movie})`}
          </LabelStyled>
        ))}
      </OptionsStyled>
    </CategoryStyled>
  );
};
