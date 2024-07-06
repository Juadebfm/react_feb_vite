import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("My JSONPLACEHOLDER DATA:", data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="px-[35px]">
      {data.map((post) => (
        <div
          key={post.id}
          className="w-full lg:w-[300px] h-max border border-slate-500 mt-5 p-5"
        >
          <small className="text-lg mb-3 bg-black text-white rounded-full p-2 w-[30px] h-[30px]">
            {post.id}
          </small>
          <h1 className="text-3xl text-center uppercase">{post.title}</h1>
          <p className="text-center font-light px-[35px]">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UseEffect;
