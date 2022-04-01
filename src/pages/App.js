import "../assets/css/App.css";

import ReactGA from "react-ga";

import { AboutMe, Stream } from "./Pages";

import { Header, Footer, SEO } from "../comp/Components";

function App() {
  ReactGA.initialize("", []);
  return (
    <div id="app">
      <SEO />
      <Header pageTitle={"Anykeys stream"} />
      <Stream />
      <Header pageTitle={"About me"} />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
