const defaultState = {
  text: "",
  foo: {
    bar: "zoo",
    nested: {
      veryDeep: true,
    },
  },
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        text: action.text,
        foo: {
          ...state.foo,
          bar: action.text,
        },
      };
    case "SUBMIT":
      console.log(state, action)
      action.auth.mock = false
      alert("\n\nInput Submitted!\nSubmitted Input: " + action.text + "\nAuth: " + action.auth.mock)
      return defaultState
    default:
      return state;
  }
}
