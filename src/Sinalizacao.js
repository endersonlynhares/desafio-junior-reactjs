import { useState } from "react";
import ColorTrafficLight from "./ColorTrafficLight";

const Sinalizacao = ({ colors = [] }) => {
  const [colorLight, setColorLight] = useState("");

  return (
    <div className="sinalizacao">
      {colors.map((color) => {
        return (
          <ColorTrafficLight
            key={color}
            color={color}
            on={color === colorLight}
            onClick={() => setColorLight(color)}
          />
        );
      })}
    </div>
  );
};

export default Sinalizacao;
