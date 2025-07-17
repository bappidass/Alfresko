
import { websiteData } from "@/data/websiteData";

const NewsMarquee = () => {
  return (
    <div className="bg-white backdrop-blur-sm  rounded-sm shadow-lg">
      <div className="flex items-center px-2 py-1">
        <div className="flex flex-col items-center bg-white text-black px-1 py-1  rounded-sm mr-2 flex-shrink-0">
          <span className="font-bold Space Grotesk text-sm lg:text-xl ">NEWS</span>
          <span className="ml-2 Space Grotesk text-[10px] lg:text-xl">& ALERTS</span>
        </div>
        <div className="overflow-hidden flex-1">
          <div className="flex animate-[scroll_10s_linear_infinite] md:animate-[scroll_10s_linear_infinite]">
            {websiteData.hero.news.concat(websiteData.hero.news).map((item, index) => (
              <span
                key={index}
                className="text-gray-700 text-sm whitespace-nowrap mr-16 flex-shrink-0"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;
