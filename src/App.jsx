import { useEffect, useRef } from "react";
import { AnimationHome } from "./components/AnimationHome";
import { CardBlock } from "./components/CardBlock";
import { ContainerButtons } from "./components/ContainerButtons";
import { FormAdd } from "./components/FormAdd";
import { useBlockchain, useForm } from "./hooks/index";

export const App = () => {
  const {
    data,
    crearGenesis,
    agregarBloque,
    leng,
    updateDifficulty,
    difficulty,
  } = useBlockchain();
  const { newData, handleInputChange, reset } = useForm();

  const handleChangeDifi = (value) => {
    updateDifficulty(value);
  }

  return (
    <>
      <div className="row container-fluid">
        <div className="col-5 container-fluid">
          <div className="row mt-5 mx-auto">
            <FormAdd
              data={data}
              newData={newData}
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="row container mt-4">
            <ContainerButtons
              crearGenesis={crearGenesis}
              agregarBloque={agregarBloque}
              payload={newData}
              reset={reset}
              leng={leng}
            />
          </div>
          <div className="row container-fluid ">
            <AnimationHome />
            <div className="row">
              <div className="col-3">
                <span className="titles">Difficulty:</span>
                <input
                  className="form-control shadow-sm form-control-my"
                  value={difficulty}
                  type="text"
                  onChange={ (e) => e.target.value = handleChangeDifi(e.target.value) }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 container-fluid container-my mx-auto hiddenScroll">
          {data.map((block) => (
            <CardBlock key={block.hash} block={block} />
          ))}
        </div>
      </div>
    </>
  );
};
