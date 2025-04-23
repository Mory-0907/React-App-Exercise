import Welcome from "./Welcome";
import { useState } from "react";

function InteractiveWelcome() {
  const [name, setName] = useState();

  function OnChange(event){
    setName(event.target.value)
  }
  return (
    <div>
      <input type="text" id="name" value={name} onChange={OnChange} />
      <Welcome name={name}/>
    </div>
  );
}
export default InteractiveWelcome;
