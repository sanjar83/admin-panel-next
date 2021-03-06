import React from "react";
import styled from "styled-components";
import ToDoList from "./ToDoList";

const ToDoItmeDiv = styled.div`
  display: flex;

  .todo-list {
    background: #fff;
    font-size: 20px;
    max-width: 15em;
    margin: auto;
    padding: 0.5em 1em;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  }
  .todo {
    display: block;
    position: relative;
    padding: 1em 1em 1em 16%;
    margin: 0 auto;
    cursor: pointer;
    border-bottom: solid 1px #ddd;
  }
  .todo:last-child {
    border-bottom: none;
  }
  .todo__state {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }
  .todo__text {
    color: #135156;
    transition: all 0.4s linear 0.4s;
  }
  .todo__icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    margin: auto;
    fill: none;
    stroke: #27fdc7;
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
  .todo__line,
  .todo__box,
  .todo__check {
    transition: stroke-dashoffset 0.8s cubic-bezier(0.9, 0, 0.5, 1);
  }
  .todo__circle {
    stroke: #27fdc7;
    stroke-dasharray: 1 6;
    stroke-width: 0;
    transform-origin: 13.5px 12.5px;
    transform: scale(0.4) rotate(0deg);
    animation: none 0.8s linear;
  }
  @keyframes explode {
    30% {
      stroke-width: 3;
      stroke-opacity: 1;
      transform: scale(0.8) rotate(40deg);
    }
    100% {
      stroke-width: 0;
      stroke-opacity: 0;
      transform: scale(1.1) rotate(60deg);
    }
  }
  .todo__box {
    stroke-dasharray: 56.1053, 56.1053;
    stroke-dashoffset: 0;
    transition-delay: 0.16000000000000003s;
  }
  .todo__check {
    stroke: #27fdc7;
    stroke-dasharray: 9.8995, 9.8995;
    stroke-dashoffset: 9.8995;
    transition-duration: 0.32000000000000006s;
  }
  .todo__line {
    stroke-dasharray: 168, 1684;
    stroke-dashoffset: 168;
  }
  .todo__circle {
    animation-delay: 0.5599999999999999s;
    animation-duration: 0.5599999999999999s;
  }
  .todo__state:checked ~ .todo__text {
    transition-delay: 0s;
    color: #5ebec1;
    opacity: 0.6;
  }
  .todo__state:checked ~ .todo__icon .todo__box {
    stroke-dashoffset: 56.1053;
    transition-delay: 0s;
  }
  .todo__state:checked ~ .todo__icon .todo__line {
    stroke-dashoffset: -8;
  }
  .todo__state:checked ~ .todo__icon .todo__check {
    stroke-dashoffset: 0;
    transition-delay: 0.48s;
  }
  .todo__state:checked ~ .todo__icon .todo__circle {
    animation-name: explode;
  }
`;

const ToDoItem = ({ id, status, task, deleteItem, markItemComplete }) => {
  console.log(">>>", id, task, status);

  const onMarkItemComplete = (e) => {
    markItemComplete(id);
  };
  const onDeleteItem = (e) => {
    deleteItem(id);
  };

  return (
    <ToDoItmeDiv>
      <svg
        viewBox="0 0 0 0"
        style={{ position: "absolute", zIndex: -1, opacity: 0 }}
      >
        <defs>
          <linearGradient
            id="boxGradient"
            gradientUnits="userSpaceOnUse"
            x1={0}
            y1={0}
            x2={25}
            y2={25}
          >
            <stop offset="0%" stopColor="#27FDC7" />
            <stop offset="100%" stopColor="#0FC0F5" />
          </linearGradient>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#0FC0F5" />
            <stop offset="100%" stopColor="#27FDC7" />
          </linearGradient>
          <path
            id="todo__line"
            stroke="url(#lineGradient)"
            d="M21 12.3h168v0.1z"
          />
          <path
            id="todo__box"
            stroke="url(#boxGradient)"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
          />
          <path
            id="todo__check"
            stroke="url(#boxGradient)"
            d="M10 13l2 2 5-5"
          />
          <circle id="todo__circle" cx="13.5" cy="12.5" r={10} />
        </defs>
      </svg>
      <div className="todo-list">
        <label className="todo">
          <input className="todo__state" type="checkbox" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 200 25"
            className="todo__icon"
          >
            <use xlinkHref="#todo__line" className="todo__line" />
            <use xlinkHref="#todo__box" className="todo__box" />
            <use xlinkHref="#todo__check" className="todo__check" />
            <use xlinkHref="#todo__circle" className="todo__circle" />
          </svg>
          <div className="todo__text">{task}</div>
        </label>
        <button
          style={{ float: "right", marginTop: "-4px" }}
          type="button"
          className="btn btn-danger btn-sm"
          onClick={onDeleteItem}
        >
          x
        </button>
      </div>
      {/* <input type="checkbox" onChange={onMarkItemComplete} />
                <span className="task-class"> {task} </span>  */}
    </ToDoItmeDiv>
  );
};

export default ToDoItem;
