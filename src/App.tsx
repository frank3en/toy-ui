import "./App.css";
import add from "./helpers/test";
import TestSpan from "./components/TestSpan/TestSpan";

function App() {
  console.log("add(1,2) :>> ", add(1, 2));
  return (
    <div className="App">
      <TestSpan></TestSpan>
    </div>
  );
}
export default App;
