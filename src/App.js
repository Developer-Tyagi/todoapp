import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemChange = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <div className="main_div">
      <div className="centre_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a items"
          value={inputList}
          onChange={itemChange}
        ></input>
        <button onClick={listOfItems}> +</button>

        <ol>
          {/* <li>{inputList}</li> */}

          {Items.map((value) => {
            return <li>{value}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
