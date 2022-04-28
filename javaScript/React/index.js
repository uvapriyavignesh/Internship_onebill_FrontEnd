// const a1 = React.createElement("h1", {null}, "REACT JS");
// // ReactDOM.render(a1, document.getElementById("root"));
// const li = React.createElement(
//   "ul",
//   null,
//   React.createElement("li", null, "car"),
//   React.createElement("li", null, "bike")
// );
// ReactDOM.render(a1, document.getElementById("root"));
// ReactDOM.render(li, document.getElementById("root1"));
const mobile = ["samsung", "nokia", "oppo", "moto"];
// const e1 = React.createElement(
//   "ul",
//   null,
//   mobile.map((value) => {
//     return React.createElement(
//       "li",
//       null, //{ style:"background-color: aquamarine" },
//       value
//     );
//   })
// );
//--------------------------jsx---------------------------------
const jsx1 = (
  <ol>
    {mobile.map((vale, i) => {
      return <li key={i}>{vale}</li>;
    })}
  </ol>
);
ReactDOM.render(jsx1, document.getElementById("root"));
