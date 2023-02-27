import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import img from "../assets/img_no_data.png";

export const ContainerButtons = ({
  crearGenesis,
  agregarBloque,
  payload,
  reset,
  leng,
}) => {
  const MySwal = withReactContent(Swal);

  const validatePayload = () => {
    if (payload === "") {
      MySwal.fire({
        title: "Oops...",
        text: "You must type something in the input field",
        imageUrl: img,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonColor: "#40bb84",
      });
      return false;
    }

    const Toast = MySwal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Block added",
    });
    agregarBloque(payload);
    reset();
  };

  return (
    <>
      <div className=" text-center">
        {leng === 0 ? (
          <button
            onClick={crearGenesis}
            className="btn-my-primary shadow-sm mx-2"
          >
            Start chain
          </button>
        ) : (
          <button
            onClick={crearGenesis}
            className="btn-my-primary-disabled shadow-sm mx-2"
            disabled
          >
            Start chain
          </button>
        )}
        <button
          onClick={() => validatePayload()}
          className="btn-my-secondary shadow-sm"
        >
          Add new block
        </button>
      </div>
    </>
  );
};
