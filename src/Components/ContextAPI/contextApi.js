import { ThemeContext } from "./ThemeContext";

const ThemedButton = (props) => {
  console.log("\nProps: ", props);
  let theme = props.context;
  return <button {...props} style={{ backgroundColor: theme.background }} />;
};

ThemedButton.contextType = ThemeContext;
export default ThemedButton;
