import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Progress } from "./Styles";
import { useProgressContext } from "../../contexts";

export function ProgressBar() {
  const navigate = useNavigate();
  const { progress } = useProgressContext();
  const handleClick = () => navigate("/hoje");

  return (
    <Progress onClick={handleClick}>
      <CircularProgressbar
        text={"Hoje"}
        value={progress}
        background
        backgroundPadding={5}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#ffffff",
          pathColor: "#ffffff",
          trailColor: "transparent",
        })}
      />
    </Progress>
  );
}
