import { hot } from "react-hot-loader/root";
import React from "react";

const list = [{ caption: "task 1", important: false, id: 1 }, { caption: "task 2", important: true, id: 2 }];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list };
    this.onDel = this.onDel.bind(this);
  }

  onDel(id) {
    this.setState(state => {
      return { list: state.list.filter(item => item.id != id) };
    });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
        <ul>
          {this.state.list.map(item => (
            <li key={item.id} className={item.important ? "item important" : "item"}>
              <span>{item.caption}</span>
              <button onClick={() => this.onDel(item.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default hot(App);
