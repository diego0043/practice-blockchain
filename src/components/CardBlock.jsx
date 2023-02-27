import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CardBlock = ({ block }) => {
  const MySwal = withReactContent(Swal);

  const showInfo = ({ index, fecha, prevHash, hash, nonce, data }) => {
    MySwal.fire({
      title: `Block ${index}`,
      html: `
      <div className="row">
        <div className="col-6">
          <span className="titles">Date</span>
          <br />
          <span className="subtitles">${fecha}</span>
        </div>
        <div className="col-6">
          <span className="titles">Nonce</span>
          <br />
          <span className="subtitles">${nonce}</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <span className="titles">Previus Hash</span>
          <br />
          <span className="subtitles">${prevHash}</span>
        </div>
        <div className="col-6">
          <span className="titles">Hash</span>
          <br />
          <span className="subtitles">${hash}</span>
        </div>
      </div>
      <div className="row">

        <div className="col-12">
          <span className="titles">Data</span>
          <br />
          <span className="subtitles">${data}</span>
        </div>
      </div>
      `,
      confirmButtonColor: "#40bb84",
    });
  };

  return (
    <>
      <div className="card-my shadow mx-auto">
        <div>
          <span className="index">{block.index}</span>
        </div>
        <div className="card-title-my">
          <span className="titles">Hash</span>
          <br />
          <div className="row"></div>
          <span className="subtitles">{block.hash}</span>
        </div>

        {block.prevHash === "" ? (
          <div>
            <span className="badge rounded-pill p-2 bagde-my">
              Genesis block
            </span>
            <button onClick={() => showInfo(block)} className=" btn-i">
              <span className="material-icons-outlined">info</span>
            </button>
          </div>
        ) : (
          <div>
            <span className="titles">Previus Hash</span>
            <br />
            <div className="card-title-my">
              <span className="subtitles">{block.prevHash}</span>
            </div>
            <button onClick={() => showInfo(block)} className="btn-i">
              <span className="material-icons-outlined">info</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};
