import React, { useEffect, useState } from "react";

export default function FetchData() {
  const [value, setData] = useState();
  function fetchJson() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }
  useEffect(() => {
    fetchJson();
    console.log(value);
  });

  return (
    <div>
      fetchData
      {/* <ul>
        {() => {
          value.map((v, i) => {
            return <li>v.id</li>;
          });
        }}
      </ul> */}
    </div>
  );
}
