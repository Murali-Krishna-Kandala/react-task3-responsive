import "./App.css";
import HeaderComponent from "./components/header";
import IntrodutionComponent from "./components/Introduction";
import WwdComponent from "./components/Wwd";
import IconComponent from "./components/Icon";
import FormComponent from "./components/form";
import LatestNewsComponent from "./components/latestNews";
import FooterComponent from "./components/footer";
function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <IntrodutionComponent />
      <WwdComponent />
      <IconComponent />
      <FormComponent />
      <LatestNewsComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
