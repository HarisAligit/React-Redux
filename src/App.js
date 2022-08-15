import React from "react";
import { render } from "react-dom";
import configureStore from "./Components/Store-Redux/store";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import AppRender from "./Components/test/AppRender";

// action creator
function updateText(text) {
  return {
    type: "UPDATE",
    text,
  };
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const { store, persistor } = configureStore();

class App extends React.Component {
  onUpdateText = (e) => {
    this.props.dispatch(updateText(e.nativeEvent.target.value));
  };

  render() {
    return (
      // <div style={styles}>
      //   <h2>Start editing to see some magic happen {"\u2728"}</h2>
      //   <input value={this.props.text} onChange={this.onUpdateText} />
      //   <pre style={{ textAlign: "left" }}>
      //     {JSON.stringify(this.props.foo, undefined, 2)}
      //   </pre>
      // </div>
      <AppRender />
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.form.text,
  foo: state.form.foo,
});

const ConnectedApp = connect(mapStateToProps)(App);

export { ConnectedApp, store, persistor };
