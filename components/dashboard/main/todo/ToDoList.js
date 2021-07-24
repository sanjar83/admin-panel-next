import React from "react";
import styled from "styled-components";
import ToDo from "./ToDo";

const ToDoListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ToDoList = ({ items, deleteItem, markItemComplete }) => {
  console.log("items", items);
  return (
    <ToDoListDiv>
      {items?.map((item) => (
        <ToDo
          id={item.id}
          status={item.status}
          task={item.task}
          deleteItem={deleteItem}
          markItemComplete={markItemComplete}
        />
      ))}
    </ToDoListDiv>
  );
};

export default ToDoList;
