class User extends React.Component {
  state = {
    username: "Admin",
    admincheck: true,
  };
  change() {
    if (this.state.admincheck) {
      this.setState(() => {
        return {
          username: "sample",
          admincheck: false,
        };
      });
    } else {
      this.setState(() => {
        return { admincheck: true, username: "Admin" };
      });
    }
  }
  check(a) {
    if (a) {
      return (
        <div>
          <h1>Home</h1>
        </div>
      );
    }
    return <div></div>;
  }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.username}</h1>
        <h1>Login</h1>
        {this.check(this.state.admincheck)}
        <button
          onClick={() => {
            this.change();
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<User />, document.getElementById("root"));
