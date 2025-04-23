import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";

function App() {
  const handleLogin = (data) => {
    console.log("Login data:", data);
  };
  return (
    <>
      <div>
        <InteractiveWelcome />
        <Login onLogin={handleLogin} />
      </div>
    </>
  );
}

export default App;
