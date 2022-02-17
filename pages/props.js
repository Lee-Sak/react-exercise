import { useState, useEffect, useMemo, useRef } from "react";
import React from "react";
import MemorizedBtn from "../components/btn_comp";
import styles from "../styles/props.module.css";

const props = () => {
  console.log("app rendered");
  const [value, setValue] = useState("Save Changes");
  const changeValue = () => {
    if (value === "Save Changes") setValue("Revet Changes");
    else setValue("Save Changes");
  };

  // props 변수명일뿐 Btn 컴퍼넌트 안으로 전달되고 있음
  // module.css를 사용하면 classname을 기억할 필요가 없음. 왜냐? next에서 자동으로 랜덤하게 생성해주기 때문
  return (
    <>
      <h1 className={styles.title}>Welcome back!!</h1> 
      <h1>Welcome back!!</h1> 
      <MemorizedBtn text={value} changeValue={changeValue} big={true} />
      <MemorizedBtn text="continue" fontSize={10} />
      <h1>aa</h1>
    </>
  );
};

export default props;

// 페이지와 컴포넌트를 분리하는 기준은 앞글자가 소문자이냐 대문자이냐
