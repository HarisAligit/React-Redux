import contextProvider from "./ThemeContext";
const contextApp = () => {
  const color = "white";

  return (
    <contextProvider.Provider value={color}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my web page</h1>
        </header>
      </div>
    </contextProvider.Provider>
  );
};

export default contextApp;
