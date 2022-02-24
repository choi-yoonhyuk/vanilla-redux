import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ text, deletClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={deletClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    deletClick: (e) => {
      e.preventDefault();
      dispatch(actionCreators.deleteToDo(ownProps.id));
    },
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
