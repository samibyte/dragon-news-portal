import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import RightAside from "../components/HomeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    if (newsData && id) {
      const newsDetails = newsData.find((singleNews) => singleNews.id === id);
      setNews(newsDetails);
    }
  }, [newsData, id]);

  console.log(news);
  if (!news) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-500">
        Loading news details...
      </div>
    );
  }
  return (
    <div>
      <header className="mt-12">
        <Header />
      </header>
      <main className="mx-auto mt-20 grid w-10/12 grid-cols-12 gap-6">
        <section className="main col-span-9">
          <NewsDetailsCard news={news} />
        </section>
        <aside className="sticky top-3 col-span-3 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
