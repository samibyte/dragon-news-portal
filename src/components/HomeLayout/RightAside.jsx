import { use } from "react";
import AdSpace from "../AdSpace";
import FindUs from "../FindUs";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";
import AuthContext from "../../contexts/AuthContext";

const RightAside = () => {
  const { user } = use(AuthContext);

  return (
    <div className="space-y-8">
      {!user && <SocialLogin />}
      <FindUs />
      <QZone />
      <AdSpace />
    </div>
  );
};

export default RightAside;
