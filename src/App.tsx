import { Text } from "./components/Text";
import "./styles/global.css";

export function App() {
  return (
    <>
      <h1 className="font-bold text-gray-400 text-2xl">Hello world!</h1>
      <button className="bg-cyan-500 hover:bg-cyan-300 text-white font-medium px-4 py-2 rounded">
        Enviar
      </button>
      <Text />
    </>
  );
}
