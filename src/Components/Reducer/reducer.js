const defaultState = {
  text: "",
  foo: {
    bar: "zoo",
    nested: {
      veryDeep: true,
    },
  },
};

const printRes = (value) => {
    console.log(value)
}

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case "UPDATE":
      console.log("\nstate: ", state)
      return {
        ...state,
        text: action.text,
        foo: {
          ...state.foo,
          bar: action.text,
        },
      };
    case "SUBMIT":
      action.auth.mock = false
      alert("\n\nInput Submitted!\nSubmitted Input: " + action.text + "\nAuth: " + action.auth.mock)
      return {
      ...state,
        text: "",
      auth: action.auth,
      };
    case "ASYNC":
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
}
