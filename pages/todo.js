import React, { useEffect, useState } from "react";

const ArrayForm = ({ text, todo, todos, setTodo, setTodos }) => {
  console.log(text, "hi");

  useEffect(() => {
    console.log(`${text} array:`, todos);
  }, [todos]);

  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // 버튼 submit시 새로고침 막기

    // 빈 문자열일 때는 제출안되게
    if (todo === "") {
      return;
    }
    // 값을 설정하는 것은 함수를 보내는것과 단순히 값을 보내는게 있음
    setTodos((currentArray) => {
      return [todo, ...currentArray];
    });
    setTodo(""); // 제출이 완료 되었으면 빈문자열로 초기화
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="write your to do..."
        />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {todos.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </>
  );
};

const MemoArrayForm = React.memo(ArrayForm);

const todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const [todo1, setTodo1] = useState("");
  const [todos1, setTodos1] = useState([]);

  // useEffect(() => {
  //   console.log(todos);
  // }, [todos]);
  console.log("all ");
  return (
    <div>
      {/* <h1>My to dos {todos.length}</h1> */}
      <MemoArrayForm
        text="ori"
        todo={todo}
        todos={todos}
        setTodo={setTodo}
        setTodos={setTodos}
      />
      <MemoArrayForm
        text="copy"
        todo={todo1}
        todos={todos1}
        setTodo={setTodo1}
        setTodos={setTodos1}
      />
    </div>
  );
};

export default todo;
