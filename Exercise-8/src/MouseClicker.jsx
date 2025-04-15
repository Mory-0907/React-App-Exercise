const MouseClicker = () => {
  const stampaNome = (event) => {
    console.log(event.target.name);
  };
  const stampaUrl = (event) => {
    console.log(event.target.src);
    event.stopPropagation();
  };
  return (
    <>
      <div>
        <button
          style={{ padding: "20px", marginBottom: "10px" }}
          name="one"
          onClick={stampaNome}
        >
          {" "}
          clicca 1
        </button>
      </div>
      <div>
        <button style={{ padding: "10px" }} name="two" onClick={stampaUrl}>
          <img src="/vite.svg" alt="logo di vite" />
        </button>
      </div>
    </>
  );
};
export default MouseClicker;
