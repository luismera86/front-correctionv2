import { useCounterStore } from "./shared/store/counterStore";

export const App = () => {
  const { count, increment } = useCounterStore();

  return (
    <div>
      <h1 className="text-cyan-700">{count}</h1>
      <button onClick={() => increment()}>Aumentar</button>
    </div>
  );
};
