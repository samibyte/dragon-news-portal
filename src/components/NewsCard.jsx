import { Link } from "react-router";
import { FaStar, FaRegEye } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, total_view, rating } =
    news;

  return (
    <div className="card bg-base-100 overflow-hidden rounded-xl shadow-lg">
      {/* Header */}
      <div className="bg-base-200 flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">{author?.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div>
          <button className="btn btn-ghost btn-sm text-gray-500 hover:text-gray-700">
            <BsShare size={18} />
          </button>
          <button className="btn btn-ghost btn-sm text-gray-500 hover:text-gray-700">
            <IoBookmarkOutline size={18} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="mt-4 px-4">
        <h2 className="text-lg leading-snug font-bold">{title}</h2>
      </div>

      {/* Image */}
      <div className="mt-3 px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Body Text */}
      <div className="mt-3 px-4 text-sm text-gray-600">
        <p>{details.slice(0, 200)}...</p>
        <Link
          to={`/news-details/${id}`}
          className="mt-1 inline-block font-semibold text-[#FF8C47] hover:underline"
        >
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="mx-4 mt-3 flex items-center justify-between border-t border-gray-200 py-8 text-sm">
        <div className="text-warning flex items-center gap-[2px]">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={14}
              className={i < rating.number ? "text-warning" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-600">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye size={15} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
