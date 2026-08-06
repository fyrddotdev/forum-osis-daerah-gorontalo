import HeroSection from "../../components/modules/home/hero";
import LatestArticles from "../../components/modules/home/latest-article";
import AboutUs from "../../components/modules/home/about-us";


export default function MainPage() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <div className="p-4 sm:p-6 md:p-12 lg:p-16 bg-linear-to-br from-primary/25 to-primary-foreground">
        <div className="flex flex-col gap-16 my-12">
          <AboutUs />
          <LatestArticles />
        </div>
      </div>
    </main>
  );
}
