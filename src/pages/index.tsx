import { Header } from "components/Header";
import { Main } from "components/Main";
import { useBolaoContext } from "context/BolaoContext";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { categories, isLoading } = useBolaoContext();

  // React.useEffect(() => {
  //   console.log({ categories });
  // }, [categories]);

  return (
    <div>
      <Header />
      {!isLoading && <Main categories={categories} />}
    </div>
  );
};

export default Home;
