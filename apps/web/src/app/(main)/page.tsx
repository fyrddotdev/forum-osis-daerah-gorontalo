import HeroSection from "../../components/modules/layout/Home/Hero";
import LatestArticles from "../../components/modules/layout/Home/LatestArticles";

export default function Main() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <LatestArticles />
    </main>
  );
}
