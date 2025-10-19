import AdSpace from "../AdSpace";
import FindUs from "../FindUs";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin />
      <FindUs />
      <QZone />
      <AdSpace />
    </div>
  );
};

export default RightAside;
