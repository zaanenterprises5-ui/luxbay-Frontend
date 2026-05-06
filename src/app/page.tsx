import HeroBanner from "@/components/homepage/Header";
import CategoryCarousel from "@/components/homepage/CategoryCarousel";
import NewArrivals from "@/components/homepage/NewArrivals";
import TopSelling from "@/components/homepage/TopSelling";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <HeroBanner />
      <main className="my-[50px] sm:my-[72px]">
        <CategoryCarousel />
        <NewArrivals />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-brand/10 my-10 sm:my-16" />
        </div>
        <TopSelling />
      </main>
    </>
  );
}
