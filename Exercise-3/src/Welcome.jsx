import Age from "./Age";

function Welcome(props) {
  return (
    <div>
      <p>Welcome, <strong>{props.name}</strong>!</p>
      <Age age={props.age}/>
    </div>
  );
}
Welcome.defaultProps = {name : "Morena"};
export default Welcome;
