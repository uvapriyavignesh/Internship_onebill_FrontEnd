function Myapp() {
  const [name1, setName] = React.useState({ fname: "haiii", lname: "last" });
  function upadtestate() {
    setName({
      ...name1, // we use for keep unchanget element
      fname: "changed",
    });
  }
  return (
    <div>
      <h1>{name1.fname}</h1>
      <h1>{name1.lname}</h1>
      <button onClick={upadtestate}> click me</button>
    </div>
  );
}

ReactDOM.render(<Myapp />, document.getElementById("root"));
