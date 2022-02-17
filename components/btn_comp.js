import { useState, useEffect, useMemo, useRef } from "react";
import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";

// fontSize가 존재하지 않으면 기본값 설정 가능
// 파라미터 명은 상관없음. 구조분해할당 ({prop_name}) 사용가능

const Btn = ({ text, changeValue, big, fontSize = 15 }) => {
  console.log(text, "Btn rendered", fontSize);
  return (
    <button
      onClick={changeValue}
      className={styles.title} // create-next-app은 moudle.css 코드를 자바스크립트로 변환해줌
      style={{
        // color: "blue",
        padding: "10px 20px",
        border: big ? "10px solid blue" : "3px solid blue",
        borderRadius: 10,
        fontSize,
      }}
    >
      {text}
    </button>
  );
};

Btn.propTypes = {
  text: PropTypes.string.isRequired, // 반드시필요로 하는 PROPS일때 isRequired
  fontSize: PropTypes.number,
};

// 만약 props가 변경되지 않았더면 이 컴포넌트를 다시 그릴까 말까를 결정할 수 있음 -> React.memo
// 제일 상위에 있는 Component의 state가 바뀐다면 자식 Component들은 모두 리렌더링(새로운 값을 가지고 다시그림) 되는데, React.memo를 사용하여 props가 바뀌는지 확인하고 바뀌지 않았으면 해당 컴포넌트는 리렌더링 하지 않는다.!
export default React.memo(Btn);
