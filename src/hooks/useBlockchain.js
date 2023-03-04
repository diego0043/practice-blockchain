import { useState } from "react";
import SHA256 from "crypto-js/sha256";

export const useBlockchain = () => {
  const [data, setData] = useState([]);
  const [difficulty, setDifficulty] = useState("00");
  const [isLoading, setIsLoading] = useState(false);

  // se crea el bloque genesis al inicio de la app
  const crearGenesis = () => {
    let genesis = crearBloque("Genesis block", "");
    genesis.hash = crearHash(genesis);
    setData([...data, genesis]);
  };

  // se crea el bloque con los datos pasados
  const crearBloque = (payload, prevHash = "") => {
    let bloque = {
      index: data.length + 1,
      fecha: new Date(),
      prevHash: prevHash,
      hash: "",
      nonce: 0,
      data: payload,
    };
    return bloque;
  };

  // se crea el hash del bloque pasando los datos del bloque
  const crearHash = ({ index, fecha, prevHash, data, nonce }) => {
    const hash = SHA256(
      index + fecha + prevHash + nonce + JSON.stringify(data)
    ).toString();
    return hash;
  };

  const agregarBloque = (payload) => {
    console.log(payload);
    const previus = data[data.length - 1];
    const block = crearBloque(payload, previus.hash);
    const blockMined = minedBlock(block, difficulty);
    setData([...data, blockMined]);
  };

  const minedBlock = (block, difficulty) => {
    let bloque = { ...block };

    while (!bloque.hash.startsWith(difficulty)) {
      bloque.hash = crearHash(bloque);
      bloque.nonce += 1;
    }
    return { ...bloque };
  };

  const updateDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const validateChain = () => {
    data.map((block, index) => {
      let prevBlock = data[index - 1];
      let currentBlock = data[index];
      if ((index) => 1) {
        if (currentBlock.prevHash !== prevBlock.hash) {
          return false;
        } else if (crearHash(currentBlock) !== currentBlock.hash) {
          return false;
        }
      }
    });

    return true;
  };

  return {
    data,
    crearGenesis,
    agregarBloque,
    isLoading,
    leng: data.length,
    updateDifficulty,
    difficulty
  };
};
