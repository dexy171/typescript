import { React, useState } from "react";
import "./App.css";
import { UserGreeting } from "./components/UserGreeting/UserGreeting.tsx";
import { Button } from "./components/Button/Button.tsx";
import styles from "./App.module.css";

export default function App() {
  const [age, setAge] = useState(null);

  return (
    <div className={styles.container}>
      <UserGreeting name="Wojtek" city="Gdańsk" age={age} />
      <Button age={setAge} />
    </div>
  );
}
