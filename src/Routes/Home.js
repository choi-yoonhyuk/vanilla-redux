import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (text.length < 1) {
      return;
    } else {
      addToDo(text);
      setText("");
    }
  };
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

// store로 부터 state를 가져다 쓸 수 있다.
function mapStateToProps(state) {
  console.log({ toDos: state });
  return { toDos: state };
}

// store로 부터 dispatch를 사용할 수 있다.
function mapDispatchToProps(dispatch, ownProps) {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
}

// connect 를 통해 components 들을 store에 연결시겨준다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
