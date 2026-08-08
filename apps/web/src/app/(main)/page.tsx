import HeroSection from "../../components/modules/home/hero";
import LatestArticles from "../../components/modules/home/latest-article";
import AboutUs from "../../components/modules/home/about-us";
import FadeInScroll from "@/components/animations/fade-in-scroll";


export default function MainPage() {
  return (
    <main className="flex flex-col w-full">
      <FadeInScroll>
      <HeroSection />
      </FadeInScroll>
      <div className="p-4 sm:p-6 md:p-12">
        <div className="flex flex-col gap-16 my-12">
          <FadeInScroll>
            <AboutUs />
          </FadeInScroll>
          <FadeInScroll>
            <LatestArticles />
          </FadeInScroll>
        </div>
      </div>
    </main>
  );
}
