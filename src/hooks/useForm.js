import { useState } from "react";

export const useForm = () => {
  const [newData, setNewData] = useState("");

  const handleInputChange = ({ target }) => {
    setNewData(target.value);
  };

  const reset = () => {
    setNewData("");
  };

  return {
    newData,
    handleInputChange,
    reset,
  };
};
