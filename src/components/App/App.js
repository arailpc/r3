import { hot } from "react-hot-loader/root";
import React from "react";
import Delete from "../../Icons/Delete";
import ExclamationMark from "../../Icons/ExclamationMark";

const list = [{ caption: "task 1", important: false, id: 1 }, { caption: "asdlfkj", important: true, id: 2 }];

function isSearched(searchTerm) {
  return function(item) {
    return item.caption.toLowerCase().includes(searchTerm.toLowerCase());
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", list };
    this.onDel = this.onDel.bind(this);
    this.searchTermChange = this.searchTermChange.bind(this);
  }

  onDel(id) {
    this.setState(state => {
      return { list: state.list.filter(item => item.id != id) };
    });
  }

  searchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { list, searchTerm } = this.state;
    let r = null;
    if (searchTerm) r = new RegExp(searchTerm, "ig");
    return (
      <div>
        <form>
          <input type="text" value={searchTerm} onChange={this.searchTermChange} />
        </form>
        <ul>
          {list.filter(isSearched(searchTerm)).map(item => (
            <li key={item.id} className="item">
              <span
                className={item.important ? "important" : " "}
                dangerouslySetInnerHTML={{ __html: item.caption.replace(r, "<span class='light'>$&</span>") }}
              />
              <button style={{ marginLeft: "auto", marginRight: "5px" }} className="btn">
                <ExclamationMark width="16px" height="16px" />
              </button>
              <button className="btn" onClick={() => this.onDel(item.id)}>
                <Delete width="16px" height="16px" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default hot(App);
