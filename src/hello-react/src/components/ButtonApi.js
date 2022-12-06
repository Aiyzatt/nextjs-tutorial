import React from "react";

const ButtonApi = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonApi;