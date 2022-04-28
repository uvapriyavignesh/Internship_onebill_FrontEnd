// class Test extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Test is Succesfull !!!!!!!!!! {this.props.sample}</h1>
//       </div>
//     );
//   }
// }
// class Header extends React.Component {
//   render() {
//     return <h1>test {this.props.name}</h1>;
//   }
// }
// //ReactDOM.render(<Test />, document.getElementById("root"));
// ReactDOM.render(
//   <div>
//     <Test sample="haiii bala" />
//     <Header name="sampleee" />
//   </div>,
//   document.getElementById("root")
// );
// ReactDOM.render(
//   <div>
//     <Test sample="haiii bala" />
//     <Header name="sampleee" />
//   </div>,
//   document.getElementById("root1")
// );
//--------------------function component-------
// function Header(variable) {
//   return (
//     <h1>
//       function component {variable.usname.fanme}
//       {variable.usname.lastname}
//     </h1>
//   );
// }
// ReactDOM.render(
//   <Header usname={{ fanme: "ajay", lastname: "guptha" }} />,
//   document.getElementById("root")
// );
// function Header({ usname }) {
//   return (
//     <h1>
//       function component {usname.fanme}
//       {usname.lastname}
//     </h1>
//   );
// }
// ReactDOM.render(
//   <Header usname={{ fanme: "ajay", lastname: "guptha" }} />,
//   document.getElementById("root")
// );
// function Header({ fname, lastname }) {
//   return (
//     <h1>
//       function component {fname}
//       {lastname}
//     </h1>
//   );
// }
// ReactDOM.render(
//   <Header fname="ajay" lastname="guptha" />,
//   document.getElementById("root")
// );
// class Welcome extends React.Component {
//   state = {
//     name1: 0,
//   };
//   changeset() {
//     // var i;
//     // for (i = 0; i < 20; i++) {
//     this.setState({
//       name1: 89,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>second</h1>
//         <h1>{this.state.name1}</h1>
//         <button onClick={this.changeset()}>button</button>
//       </div>
//     );
//   }
// }
//------------------- pass data from one component to another uni directional-------
// function Parent(a) {
//   return (
//     <div>
//       <Child childname="child" parentname={a.name}></Child>
//     </div>
//   );
// }
// function Child(prop) {
//   return (
//     <div>
//       <h1>{prop.childname}</h1>
//       <h>{prop.parentname}</h>
//     </div>
//   );
// }
ReactDOM.render(<Welcome />, document.getElementById("root"));
