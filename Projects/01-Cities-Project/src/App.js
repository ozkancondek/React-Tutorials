import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Footer } from "./components/footer/Footer";
import { Navi } from "./components/navbar/Navi";
import { ApiProvider, useApi } from "./providers/ApiProvider";
import { MainProvider } from "./providers/MainProvider";
import { SearchProvider } from "./providers/SearchProvider";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  // const { getPost } = useContext(ApiContext);
  const { getPost } = useApi();

  useEffect(() => {
    const fetch = async () => {
      let res = await getPost(15);
      console.log("res", res);
    };
    fetch();
  }, [getPost]);
  return (
    <div>
      <Navi />
      <AllRoutes />
      <Footer />
    </div>
  );
};

//will used for getting data from api provider but i am getting data from local right now
const Main = () => (
  <ErrorBoundary
    FallbackComponent={MyError}
    onError={() => console.log("helloo")}
  >
    <MainProvider>
      <SearchProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </SearchProvider>
    </MainProvider>
  </ErrorBoundary>
);

const MyError = () => {
  return <p>Upssss</p>;
};

export default Main;
