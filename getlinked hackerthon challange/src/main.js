import React from "react";
import "./App.css";
import Header from "./component/header";
import FirstRow from "./component/firstrow";
import Secondrow from "./component/secondrow";
import Thirdrow from "./component/thirdrow";
import Fourthrow from "./component/fourthrow";
import Fifthrow from "./component/fithrow";
import Sixthrow from "./component/sixthrow";
import Seventhrow from "./component/seventhrow";
import Eigth from "./component/eigth";
import Medal from "./component/medal";
import Nineth from "./component/nineth";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstRow />
      <section>
        <Secondrow />
        <Thirdrow />
        <Fourthrow />
        <Fifthrow />
        <Sixthrow />
        <Seventhrow />
        <Medal />
        <Eigth />
        <Nineth/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
