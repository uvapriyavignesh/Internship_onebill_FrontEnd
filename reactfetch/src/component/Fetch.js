import React, { useEffect, useState } from "react";

function Fetch() {
  let [getData, setData] = useState([]);
  const get = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      <h1>sample</h1>
      <ul>
        {console.log("=============")}
        {getData.map((v, i) => {
          return (
            <li key={i}>
              {v.id} : {v.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Fetch;
