import { WiDaySunny } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";

const ModeToggle = () => {
  return (
    <div className="nightmode bg-dark d-flex mx-4 justify-content-center">
      <div className="day-icon m-3">
        <WiDaySunny size="1.5em" />
      </div>
      <div className="mode-toggle m-3 bg-success">
        <span className="toggler rounded-circle bg-white d-inline-block"></span>
      </div>
      <div className="night-icon m-3">
        <GiNightSleep size="1.3em" />
      </div>
    </div>
  );
};

export default ModeToggle;
