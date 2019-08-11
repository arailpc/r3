import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default hot(App);
