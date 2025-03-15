import Header from "./Header/page";
import Banner from "./Banner/page";
import Deployments from "./Deployment/page";
import Pricing from "./Pricing/page";
import Tooltip from "./Tooltip/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <>
    <div className="container w-full m-auto max-w-[100%] relative bg-neutral-50 dark:bg-[#171717]">
      <Header />
      <div className="container !w-[95%] m-auto">
      <Banner />
      </div>
    </div>
    <div className="container w-full m-auto max-w-[100%] relative bg-white dark:bg-[#0a0a0a]">
     <div className="container !w-[95%] m-auto">
     <Deployments />
     <Pricing />
     <Tooltip />
      </div>
      <Footer />
      </div>
      </>
  );
}
