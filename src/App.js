import React from "react";
import configureStore from "./Components/Store-Redux/store";
import { connect } from "react-redux";

// action creator
function updateText(text) {
  return {
    type: "UPDATE",
    text,
  };
}

function submitText(props) {
  return {
    type: "SUBMIT",
    auth: props.auth,
    text: props.text,
  };
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const { store, persistor } = configureStore();

const App = (props) => {
  console.log("Props: ", props);
  const onUpdateText = (e) => {
    props.dispatch(updateText(e.nativeEvent.target.value));
  };

  const onSubmit = (props) => {
    props.dispatch(submitText(props))
  }
    return (
      <div style={styles}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <input value={props.text} onChange={onUpdateText} />
        <button onClick={() => onSubmit(props)}>Submit</button>
        <pre style={{ textAlign: "left" }}>
          {JSON.stringify(props.foo, undefined, 2)}
        </pre>
      </div>
    );
}

const mapStateToProps = (state) => ({
  text: state.form.text,
  foo: state.form.foo,
  auth: state.auth,
});

const ConnectedApp = connect(mapStateToProps)(App);

export { ConnectedApp, store, persistor };