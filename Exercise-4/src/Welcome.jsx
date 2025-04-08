import Age from "./age";
import Message from "./Message";

function Welcome(props) {
  return (
    <div>
      <p>Welcome, {props.name}</p>
      <p>
        <Message age={props.age} />
      </p>
      <p>{props.age > 18 && <Age age={props.age} />}</p>
      <p>{props.age && <Age age={props.age} />}</p>
      <p>{props.age > 18 && props.age < 65 && <Age age={props.age} />}</p>
      <p>
        {props.age > 18 && props.name === "John" && <Age age={props.age} />}
      </p>
      <p>{<Age age={props.age} />}</p>
    </div>
  );
}

export default Welcome;
