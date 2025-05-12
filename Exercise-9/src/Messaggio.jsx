import "./messaggio.css";

const Messaggio = (props) => {
  return (
    <div className="container">
      {props.className === "blu-right" ? (
        <>
          <p className={props.className}>{props.text}</p>
        </>
      ) : (
        <>
          <p className={props.className}>{props.text}</p>
        </>
      )}
    </div>
  );
};

export default Messaggio;
