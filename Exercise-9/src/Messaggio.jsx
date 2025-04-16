import "./messaggio.css";

const Messaggio = (props) => {
  return (
    <div className="container">
      
      {props.className === "blu-right" ? (
        <>
          <p className={props.className}>{props.text}</p>
          <img className="imgReact" src="/assets/con sfondo.png" alt="me" />
        </>
      ) : (
      
        <>
          <img className="imgReact" src="/assets/react.png" alt="react logo" />
          <p className={props.className}>{props.text}</p>
        </>
      )}
    </div>
  );
};

export default Messaggio;