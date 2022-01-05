import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./components/error/Error";
import { Footer } from "./components/footer/Footer";
import { Navi } from "./components/navbar/Navi";

import { ApiProvider, useApi } from "./providers/ApiProvider";
import { MainProvider } from "./providers/MainProvider";
import { SearchProvider } from "./providers/SearchProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  // const { getPost } = useContext(ApiContext);
  const { getPost } = useApi();

  useEffect(() => {
    const fetch = async () => {
      let res = await getPost(15);
    };
    fetch();
  }, [getPost]);
  return (
    <div>
      <div>
        <Navi />
        <AllRoutes />
        <Footer />
      </div>
    </div>
  );
};

//will used for getting data from api provider but i am getting data from local right now
const Main = () => (
  <ErrorBoundary
    FallbackComponent={Error}
    /*     onError={() => console.log("helloo")} */
  >
    <ThemeProvider>
      <MainProvider>
        <SearchProvider>
          <ApiProvider>
            <App />
          </ApiProvider>
        </SearchProvider>
      </MainProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default Main;
