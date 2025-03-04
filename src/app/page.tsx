import Header from "./Header/page";
import Banner from "./Banner/page";

export default function Home() {
  return (
    <div className="container w-full m-auto max-w-[100%] relative bg-neutral-50 dark:bg-[#171717]">
      <Header />
      <div className="container !w-[95%] m-auto">
      <Banner />
      </div>
    </div>
  );
}
