import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const AnimationHome = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets6.lottiefiles.com/packages/lf20_eHZRuUxa9i.json"
      style={{ height: "350px", width: "400px" }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
};
