import Marquee from "react-fast-marquee";

const Headline = () => {
  return (
    <div className="text-primary bg-base-200 flex items-center gap-3 p-3 font-semibold">
      <p className="bg-accent px-3 py-2 text-white">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptatibus dolorum natus voluptates esse quam non, maxime illum
          nulla totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptatibus dolorum natus voluptates esse quam non, maxime illum
          nulla totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptatibus dolorum natus voluptates esse quam non, maxime illum
          nulla totam?
        </p>
      </Marquee>
    </div>
  );
};

export default Headline;
