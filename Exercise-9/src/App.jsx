import React, { useState } from "react";
import Messaggio from "./Messaggio";
import "./styles.css";

function App() {

  const [messages, setMessages] = useState([
    { text: "Ciao Morena", className: "" },
    { text: "Ciao!", className: "blu-right" },
    { text: "Come stai?", className: "" },
    { text: "Tutto bene, grazie", className: "blu-right" },
    { text: "Fammi sapere se ci sarai all'evento programmato per venerdì", className: "" },
    { text: "Ok, ci aggiorniamo, buona giornata!", className: "blu-right" },
  ]);


  const [newMessage, setNewMessage] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (newMessage.trim() === "") return;

    setMessages([...messages, { text: newMessage, className: "blu-right" }]);

   
    setNewMessage("");

  
    setTimeout(() => {
      const randomResponses = [
        "scusa ora devo andare",
        "eh perdonami devo proprio andare",
        "sono un po' occupato ora parliamo dopo?",
        "devo veramente andare via...",
        "scusami...devo andare"
      ];
     
      const randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];

     
      setMessages((messaggiPrecedenti) => [
        ...messaggiPrecedenti,
        { text: randomResponse, className: "" } 
      ]);
    }, 2000); 
  };

  return (
    <>
      <section>
        <main>
          <h1>APPLICAZIONE REACT</h1>
        
        <hr />
          {messages.map((msg, index) => (
            <Messaggio key={index} text={msg.text} className={msg.className} />
          ))}

      
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="text"
              placeholder="  Digita un messaggio"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <input type="submit" value="Invia" />
          </form>
        </main>
        
      </section>
    </>
  );
}

export default App;


