import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { useState, useEffect, useMemo, useRef } from "react";

const Compo1 = () => {
  console.log("Compo1 hi");

  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((currrent) => currrent + 1);
  };
  return (
    <div>
      <h3>Compo1 Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

const Compo2 = () => {
  console.log("Compo2 hi");

  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((currrent) => currrent + 1);
  };
  return (
    <div>
      <h3>Compo2 Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

const Compo3 = () => {
  console.log("Compo3 hi");

  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((currrent) => currrent + 1);
  };
  return (
    <div>
      <h3>Compo3 Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
// 컴포넌트는 jsx를 반환하는 함수다!!
const Index = () => {
  console.log("index hi");

  const [index, setIndex] = useState("0");
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter((currrent) => currrent + 1);
  };
  const onChange = (e) => {
    setIndex(e.target.value);
  };
  return (
    <>
      <select onChange={onChange}>
        <option value="0">Compo1</option>
        <option value="1">Compo2</option>
        <option value="2">Compo3</option>
      </select>
      {index === "0" && <Compo1 />}
      {index === "1" && <Compo2 />}
      {index === "2" && <Compo3 />}

      <div>
        <h3>Index Total clicks: {counter}</h3>
        <button onClick={onClick}>Click me</button>
      </div>
    </>
  );
};
export default Index;

/* 
{unreadMessages.length > 0 &&
  <h2>
    You have {unreadMessages.length} unread messages.
  </h2>
}
JavaScript에서 true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가됩니다.
따라서 && 뒤의 엘리먼트는 조건이 true일때 출력이 됩니다. 조건이 false라면 React는 무시하고 건너뜁니다. 
*/
// 컴포넌트 규칙 변수 앞글자가 대문자!
// next에선 export default component를 하면 해당 컴포넌트를 랜더링해준다!
