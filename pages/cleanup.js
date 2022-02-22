import { useEffect, useState } from "react";

const Hello = () => {
  const byfn = () => {
    console.log("destoryed");
  };
  const hifn = () => {
    console.log("created");
    return byfn;
  };

  useEffect(hifn);

  // useEffect(() => {
  //   console.log("created");
  //   // 컴포넌트가 없어질 때 실행하는 코드 return function = cleanup function
  //   return () => console.log("destoryed");
  // });
  return <h1>Hello</h1>;
};

const cleanUp = () => {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing && <Hello />}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
};

export default cleanUp;
