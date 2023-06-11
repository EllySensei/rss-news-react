import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Feed  from "./Feed.jsx";
function App() {
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticles();
  }, [])
  return(
    <>
      <nav class="flex items-center justify-between flex-wrap bg-slate-900 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">NEWS+</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">
          NEWS
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">
          TECH
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200">
          SPORT
        </a>
      </div>
    </div>
  </nav>
  <div className="font-bold text-4xl text-white font-sans text-center">
    <h1>Today's Tech Headlines: The Verge</h1>
  </div>
  <div className="grid grid-cols-2 gap-4 place-content-center rounded">
  {articles.map((item, i) => 
  <Feed 
  key={i}
  title={item.item.title}
  link={item.item.link}
  author={item.item.author}
  date={item.item.pubDate}
  />
  )}
  </div>
    </>
  );
};
export default App;