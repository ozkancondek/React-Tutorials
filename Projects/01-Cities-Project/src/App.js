import { useContext, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Footer } from "./components/footer/Footer";
import { Navi } from "./components/navbar/Navi";
import { ApiContext, ApiProvider } from "./providers/ApiProvider";
import { MainProvider } from "./providers/MainProvider";
import { SearchProvider } from "./providers/SearchProvider";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  const { getPost } = useContext(ApiContext);

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

const test = (val) => {
  return new Promise((resolve, reject) => {
    if (val < 5) {
      resolve("hello");
    }
    reject("maalesef");
  });
};
const test2 = (val) => {
  if (val < 5) {
    return Promise.resolve("hello");
  }

  return Promise.reject("maalesef");
};

test(15)
  .then((res) => console.log("test then", res))
  .catch((res) => console.log("test", res));
test2(1)
  .then((res) => console.log("ress", res))
  .catch((res) => console.log("ress4545", res))
  .finally(() => console.log("att"));

const  Main= () => (
  <ErrorBoundary FallbackComponent={MyError} onError={()=>console.log('helloo')}>
    <MainProvider>
      <SearchProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </SearchProvider>
    </MainProvider>
  </ErrorBoundary>
);


const MyError=()=>{
  return <p>Upssss</p>
}

export default Main
