import { WiDaySunny } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../../redux/actions";

const ModeToggle = () => {
  const modeState = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const modeHandler = () => {
    const nextState = modeState === "night" ? "sun" : "night";
    dispatch(toggleMode(nextState))
  };
  return (
    <div className="nightmode bg-dark d-flex mx-4 justify-content-center">
      <div className="day-icon m-3">
        <WiDaySunny size="1.5em" />
      </div>
      <div
        onClick={modeHandler}
        className={`mode-toggle m-3 ${modeState === "night" ? "night" : ""}`}
      >
        <span className="toggler rounded-circle bg-white d-inline-block"></span>
      </div>
      <div className="night-icon m-3">
        <GiNightSleep size="1.3em" />
      </div>
    </div>
  );
};

export default ModeToggle;
