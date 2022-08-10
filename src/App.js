// import React from "react";
// import { render } from "react-dom";
// import configureStore from "./Components/Store-Redux/store";
// import { Provider, connect } from "react-redux";
// import { PersistGate } from "redux-persist/lib/integration/react";
// import AppRender from "./Components/test/AppRender";
import { selectCount, incremented, decremented } from "./Components/ReduxTookKit/ReduxIntro";
import { Button } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

// // action creator
// function updateText(text) {
//   return {
//     type: "UPDATE",
//     text,
//   };
// }

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
// };

// const { store, persistor } = configureStore();

// Can still subscribe to the store

// Still pass action objects to `dispatch`, but they're created for us

// {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// {value: 1}

// class App extends React.Component {
//   onUpdateText = (e) => {
//     this.props.dispatch(updateText(e.nativeEvent.target.value));
//   };

//   render() {
//     return (
//       // <div style={styles}>
//       //   <h2>Start editing to see some magic happen {"\u2728"}</h2>
//       //   <input value={this.props.text} onChange={this.onUpdateText} />
//       //   <pre style={{ textAlign: "left" }}>
//       //     {JSON.stringify(this.props.foo, undefined, 2)}
//       //   </pre>
//       // </div>
//       <AppRender />
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   text: state.form.text,
//   foo: state.form.foo,
// });

// const ConnectedApp = connect(mapStateToProps)(App);

// export { ConnectedApp };

const App = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <br />
      <Button variant="primary" onClick={() => dispatch(incremented())}>
        Increment
      </Button>
      <Button variant="warning" onClick={() => dispatch(decremented())}>
        Decrement
      </Button>
    </div>
  );
};

export default App;
