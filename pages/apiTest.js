import { useEffect, useState } from "react";

const api = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  console.log("i run all the time");
  const isRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(isRunOnlyOnce, []); // 새로고침이나 처음진입 했을때만 실행
  const isRunChangeKeyWord = () => {
    if (keyword !== "" && keyword.length > 5)
      console.log("search for", keyword);
  };
  useEffect(isRunChangeKeyWord, [keyword]); // keyword가 바겼을때만 실행
  useEffect(() => {
    console.log("i run when counter changes.");
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword && counter change");
  }, [keyword, counter]); // 둘중하나가 변화가 일어났을때 실행

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
};

export default api;
