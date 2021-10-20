import { useState } from "react";
import "./App.scss";
import MakeList from "./components/MakeList";
import ModelList from "./components/ModelList";
import VehicleList from "./components/VehicleList";

function App() {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleMakeItemClick = (make) => {
    setSelectedMake(make);
    setSelectedModel(null);
  };

  const handleModelItemClick = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="root-container">
      <div className="content-box">
        <h3>Make</h3>
        <div className="list-container">
          <MakeList onMakeItemClick={handleMakeItemClick} />
        </div>
      </div>
      {selectedMake && (
        <div className="content-box">
          <h3>Model</h3>
          <div className="list-container">
            <ModelList
              make={selectedMake}
              onModelItemClick={handleModelItemClick}
            />
          </div>
        </div>
      )}
      {selectedMake && selectedModel && (
        <div className="content-box">
          <h3>Vehicle</h3>
          <div className="list-container">
            <VehicleList make={selectedMake} model={selectedModel} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
