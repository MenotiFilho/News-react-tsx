import "./App.css";

import Articles from "./components/Articles/Articles";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import New from "./components/New/New";

function App() {
  return (
    <div className=" flex flex-col items-center max-w-7xl mx-auto">
      <Header></Header>
      <div className="flex gap-7 ">
        <Hero></Hero>
        <New />
      </div>
      <div className="flex jus">
        <Articles></Articles>
      </div>
    </div>
  );
}

export default App;
