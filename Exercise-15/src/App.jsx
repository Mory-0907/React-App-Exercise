import { CounterDisplay } from "./CounterDisplay"
import Login from "./Login"
import { Welcome } from "./Welcome"



function App() {


  return (
    <>
      <Welcome/>
      <CounterDisplay count={0}/>
      <Login/>
    </>
  )
}

export default App
