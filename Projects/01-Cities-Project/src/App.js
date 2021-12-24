import { Footer } from "./components/footer/Footer";
import { Navi } from "./components/navbar/Navi";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <div>
      <Navi />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export { App };
