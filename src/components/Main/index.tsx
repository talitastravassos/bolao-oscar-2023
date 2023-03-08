/* eslint-disable @typescript-eslint/no-unused-vars */
import { Category } from "components/Category";
import { Form, Formik } from "formik";
import { ICategory } from "types";
import { ButtonStyled, MainStyled } from "./styles";

type MainProps = {
  categories: ICategory[];
};

export const Main = ({ categories }: MainProps) => {
  return (
    categories && (
      <MainStyled>
        <Formik
          initialValues={{
            BestPicture: "",
            BestDirector: "",
            BestLeadActor: "",
            BestLeadActress: "",
            BestSupportingActor: "",
            BestSupportingActress: "",
            BestAdaptedScreenplay: "",
            BestOriginalScreenplay: "",
            BestCinematography: "",
            BestFilmEditing: "",
            BestInternationalFeatureFilm: "",
            BestAnimatedFeatureFilm: "",
            BestVisualEffects: "",
            BestOriginalSong: "",
          }}
          onSubmit={async (values) => {
            console.log({ values });
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
                    />
                  </div>
                ))}
              </div>

              <ButtonStyled type="submit">Enviar</ButtonStyled>
            </Form>
          )}
        </Formik>
      </MainStyled>
    )
  );
};
