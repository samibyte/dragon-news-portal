import kidSwimming from "../assets/swimming.png";
import kidsClass from "../assets/class.png";
import kidsPlayground from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 space-y-5 py-4">
      <h3 className="text-primary px-4 text-xl font-semibold">Q-Zone</h3>
      <img src={kidSwimming} alt="" />
      <img src={kidsClass} alt="" />
      <img src={kidsPlayground} alt="" />
    </div>
  );
};

export default QZone;
