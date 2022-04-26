// function detail() {
//   let userDetail = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     pasword: document.getElementById("password").value,
//   };
//   console.log(userDetail);
// }
// function detail() {
//   let userDetail = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     pasword: document.getElementById("password").value,
//   };
//   localStorage.setItem("name", userDetail.name);
//   localStorage.setItem("email", userDetail.email);
//   localStorage.setItem("password", userDetail.pasword);
//   console.log(userDetail);
//   document.write(userDetail);
// }

// function check() {
//   let data1 = localStorage.getItem("name");
//   document.write(data1);
// }
// let user = window.document.getElementById("username");
// user.innerText = localStorage.getItem("name");

// let userem = window.document.getElementById("useremail");
// userem.innerText = localStorage.getItem("email");

function first(call) {
  console.log("first");
  call();
}

function second() {
  console.log("second");
}

setTimeout(first(second), 6000);
