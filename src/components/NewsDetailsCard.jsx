import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetailsCard = ({ news }) => {
  const { image_url, title, author, details, tags } = news;

  return (
    <div className="bg-base-100 space-y-6 overflow-hidden rounded-xl p-6 shadow-md">
      <img
        src={image_url}
        alt={title}
        className="h-full w-full rounded-xl object-cover"
      />

      <div className="">
        {/* Title */}
        <h2 className="mb-3 text-xl leading-snug font-semibold text-gray-800">
          {title}
        </h2>

        {/* Meta Info */}
        <div className="mb-3 text-sm text-gray-500">
          <span>
            {new Date(author.published_date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>{" "}
          | <span className="capitalize">Tags: {tags.join(", ")}</span>
        </div>

        {/* Details */}
        <p className="mb-5 text-sm leading-relaxed text-gray-700">{details}</p>

        {/* Button */}
        <Link
          to={`/category/${news.category_id}`}
          className="btn btn-error btn-sm rounded-md text-white"
        >
          <FaArrowLeftLong className="mr-2" />
          All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
