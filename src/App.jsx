import { useEffect, useRef } from "react";
import { AnimationHome } from "./components/AnimationHome";
import { CardBlock } from "./components/CardBlock";
import { ContainerButtons } from "./components/ContainerButtons";
import { FormAdd } from "./components/FormAdd";
import { useBlockchain, useForm } from "./hooks/index";

export const App = () => {
  const { data, crearGenesis, agregarBloque, leng } = useBlockchain();
  const { newData, handleInputChange, reset } = useForm();

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
          <div className="row container-fluid mt-5">
            <AnimationHome />
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
