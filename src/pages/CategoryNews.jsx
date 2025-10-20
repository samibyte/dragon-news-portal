import { useEffect, useState } from "react";
import { useLoaderData, useOutletContext, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const { setNews } = useOutletContext();
  const newsData = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id === "0") {
      setCategoryNews(newsData);
      return;
    } else if (id === "1") {
      const breakingNews = newsData.filter(
        (news) => news.others.is_today_pick === true,
      );
      setNews(breakingNews);

      const trendingNews = newsData.filter(
        (news) => news.others.is_trending === true,
      );
      setCategoryNews(trendingNews);
      return;
    }

    const categoriesedNews = newsData.filter((news) => news.category_id == id);
    setCategoryNews(categoriesedNews);
  }, [newsData, id]);

  return (
    <div>
      <h2 className="text-primary mb-5 font-bold">Dragon News Home</h2>
      <div className="grid grid-cols-1 gap-8">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
