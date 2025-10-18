import { format } from "date-fns";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img className="w-96" src={logo} alt="site logo" />
      <p className="text-secondary">Journalism Without Fear or Favour</p>
      <div className="text-secondary flex gap-1 text-xl font-medium">
        <p className="text-primary">{format(new Date(), "EEEE,")}</p>
        <p>{format(new Date(), "MMMM dd, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
