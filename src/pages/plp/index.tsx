import type { NextPage } from "next";
import Head from "next/head";
import Care from "../../components/filter/Care";
import FButton from "../../components/filter/FButton";
import Filter from "../../components/filter/Filter";
import Header from "../../components/Header";
import SliderBanner from "../../components/SliderBanner";
import SubHeader from "../../components/SubHeader";
import { CategoryItem, SubTitle, TopHeader } from "../../components/Widget";
import { SHOP_BY_CONDITION } from "../../demodata";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apollo</title>
        <meta name="description" content="Next.js+TS Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* beginning header */}
      <TopHeader />
      <Header />
      <SubHeader />
      {/* end header */}

      {/* beginning slider banner */}
      <div className="bg-dark-white">
        <SliderBanner />
      </div>
      {/* end slider banner */}

      {/* beginning Main content */}
      <div className="bg-white">
        <div className="container mx-auto">
          {/* beginning *Shop by Condition* banner */}
          <div className="py-6">
            <SubTitle>Shop by Condition</SubTitle>
            <div className="flex flex-wrap py-4">
              {SHOP_BY_CONDITION.map((item, key) => (
                <CategoryItem
                  key={key}
                  title={item.title}
                  image={item.image}
                  permilink={item.permilink}
                  className="mx-2"
                />
              ))}
            </div>
          </div>
          {/* end *Shop by Condition* banner */}
        </div>
      </div>

      {/* beginning filter sidebar */}
      <Filter />
    </div>
  );
};

export default Home;
