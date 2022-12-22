import "./App.css";

import Articles from "./components/Articles/Articles";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import New from "./components/New/New";

function App() {
  return (
    <div className="">
      <Header></Header>
      <div className="flex  container mx-auto w-1440px">
        <Hero></Hero>
        <New />
      </div>
      <Articles></Articles>
    </div>
  );
}

export default App;
