import React from "react";
export const Button = (props) => {
  return <button onClick={() => props.age(30)}>Reveal age!</button>;
};
