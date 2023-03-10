/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category } from "components/Category";
import { useBolaoContext } from "context/BolaoContext";
import { Form, Formik } from "formik";
import { ICategory } from "types";
import { ButtonStyled, MainStyled } from "./styles";

type MainProps = {
  categories: ICategory[];
};

export const Main = ({ categories }: MainProps) => {
  const { saveBolaoLocalStorage, getBolaoLocalStorage, currentBolao } =
    useBolaoContext();

  const disabledForm = !!getBolaoLocalStorage("dataBolaoOscar2023");

  return (
    <MainStyled>
      <Formik
        initialValues={currentBolao}
        onSubmit={async (values) => {
          console.log({ values });
          saveBolaoLocalStorage("dataBolaoOscar2023", values);
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              {categories.map((category) => (
                <div
                  role="group"
                  aria-labelledby="my-radio-group"
                  key={category.id}
                >
                  <Category
                    category={category}
                    name={category?.title.replace(/\s/g, "")}
                    label={category?.title}
                    disabled={disabledForm}
                  />
                </div>
              ))}
            </div>

            <ButtonStyled type="submit" disabled={disabledForm}>
              Enviar
            </ButtonStyled>
          </Form>
        )}
      </Formik>
    </MainStyled>
  );
};
