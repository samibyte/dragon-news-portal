import Marquee from "react-fast-marquee";
import Loader from "../Loader";

const Headline = ({ news }) => {
  return (
    <div className="text-primary bg-base-200 flex w-full items-center gap-3 p-3 font-semibold">
      <p className="bg-accent px-3 py-2 text-white">Latest</p>
      {news ? (
        <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
          {news?.map((n) => (
            <p className="mr-10">{n.title}.</p>
          ))}
        </Marquee>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Headline;
