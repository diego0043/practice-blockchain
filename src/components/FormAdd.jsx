import { useEffect, useRef } from "react";

export const FormAdd = ({ newData, handleInputChange, data }) => {
  const inp = useRef();
  const handleClick = () => {
    inp.current.select();
  };
  useEffect(() => {
    handleClick();
  }, [data]);

  return (
    <>
      <div className="container-fluid">
        <input
          type="text"
          className="form-control shadow-sm form-control-my"
          placeholder="Type here..."
          name="newData"
          value={newData}
          onChange={handleInputChange}
          ref={inp}
          autoComplete="off"
        />
      </div>
    </>
  );
};
