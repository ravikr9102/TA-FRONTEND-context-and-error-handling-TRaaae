import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { Context } from "../Context";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <Context.Provider value={isDarkMode}>
       <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <Header />
        <Main />
        <SwitchButton changeMode={this.changeMode} />
      </div>
      </Context.Provider>
    );
  }
}

console.log(Context);

export default App;
