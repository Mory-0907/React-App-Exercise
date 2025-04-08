function Message(props) {
  return <p>{props.age > 18 ? "You are an adult!" : "You are very young"}</p>;
}
export default Message;
