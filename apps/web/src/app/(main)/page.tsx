import HeroSection from "../../components/modules/layout/Home/Hero";
import LatestArticles from "../../components/modules/layout/Home/LatestArticles";

export default function Main() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <div className="p-4 sm:p-6 md:p-8">
        <LatestArticles />
      </div>
    </main>
  );
}
