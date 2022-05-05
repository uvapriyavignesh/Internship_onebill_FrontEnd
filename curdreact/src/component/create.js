import React, { useState } from "react";

function Create() {
  const [db, setDb] = useState([{ name: "ravi", email: "asdfghjhgfds" }]);
  db.map((value) => {
    console.log(value.name);
  });

  return (
    <div>
      <input type="text" value={db[0].name}></input>
    </div>
  );
}

export default Create;
