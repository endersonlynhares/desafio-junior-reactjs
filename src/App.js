import "./App.css"
import Sinalizacao from "./Sinalizacao";

function App() {
  const traficLightColors = ["red", "yellow", "lime", "white"]
  return (
    <div className="App">
        <Sinalizacao colors={traficLightColors} />
    </div>
  );
}

export default App;
