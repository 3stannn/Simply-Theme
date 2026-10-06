import { useState } from "react";

type WelcomeProps = { name: string };

// React syntax color preview
export function Welcome({ name }: WelcomeProps) {
  const [count, setCount] = useState(0);

  return (
    <section className="welcome">
      <h1>Hello, {name}</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </section>
  );
}
