import { React } from "react";

interface UserGreetingProps {
  name: string;
  city: string;
  age?: number;
}

export const UserGreeting = (props: UserGreetingProps) => {
  return (
    <div>
      Hello {props.name}! {props.age ? `You are ${props.age} years old!` : ""}{" "}
      What's up in {props.city}?
    </div>
  );
};
