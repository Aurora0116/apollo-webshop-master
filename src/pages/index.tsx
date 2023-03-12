import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import SliderBanner from "../components/SliderBanner";
import SubHeader from "../components/SubHeader";
import {
  CategoryButton,
  CategoryItem,
  GradientBox,
  SubTitle,
  TopHeader,
} from "../components/Widget";
import {
  CATEGORIES,
  RECOMMENDED_FOR_YOU,
  SHOP_BY_CONDITION,
} from "../demodata";

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
          {/* beginning *Recommended for you* banner */}
          <SubTitle>Recommended for you</SubTitle>
          <div className="flex flex-wrap justify-between">
            {RECOMMENDED_FOR_YOU.map((item, key) => (
              <ProductItem
                key={key}
                title={item.title}
                image={item.image}
                price={item.price}
                discount={item.discount}
                cartAble={item.cartAble}
                prescriptionNeeded={item.prescriptionNeeded}
              />
            ))}
          </div>
          {/* end *Recommended for you* banner */}

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
          {/* beginning *New Arrivals* banner */}
          <div className="py-6">
            <SubTitle>New Arrivals</SubTitle>
            <div className="flex flex-wrap ">
              {RECOMMENDED_FOR_YOU.map((item, key) => (
                <ProductItem
                  key={key}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  cartAble={item.cartAble}
                  prescriptionNeeded={item.prescriptionNeeded}
                  horizontal
                  className="w-[calc(33.3%)] p-4"
                />
              ))}
            </div>
          </div>
          {/* end *New Arrivals* banner */}
        </div>
        {/* beginning *Categories Banner* */}
        <div className="bg-dark-white py-8">
          <div className="container mx-auto flex">
            <GradientBox
              title="Discover PEAK 365 SUpplement System"
              image="/image/slider/01.jpg"
            />
            <div className="w-[calc(100%-394px)] flex flex-wrap gap-4 ml-4">
              {CATEGORIES.map((item, key) => (
                <div
                  className="rounded-lg overflow-hidden w-[calc(16.66%-16px)] bg-white"
                  key={key}
                >
                  {/* eslint-disable-next-line */}
                  <img
                    src={item.image}
                    alt={item.formartedTitle}
                    className="w-full h-24 object-cover"
                  />
                  <p className="h-[56px] font-bold text-caption-1 text-dark-gray py-3 px-[7.5px]">
                    {item.formartedTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end *Categories Banner* */}
        {/* beginning *Most Popular* */}
        <div className="bg-whtie">
          <div className="container mx-auto">
            <SubTitle>Most Popular</SubTitle>
            <div className="flex flex-wrap">
              {CATEGORIES.map((item, key) => (
                <CategoryButton className="mr-2 mb-2" id={item.id}>
                  {item.formartedTitle}
                </CategoryButton>
              ))}
            </div>
            <div className="flex flex-wrap">
              {RECOMMENDED_FOR_YOU.map((item, key) => (
                <ProductItem
                  key={key}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  cartAble={item.cartAble}
                  prescriptionNeeded={item.prescriptionNeeded}
                  className={"mr-8"}
                />
              ))}
              {RECOMMENDED_FOR_YOU.map((item, key) => (
                <ProductItem
                  key={key}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  discount={item.discount}
                  cartAble={item.cartAble}
                  prescriptionNeeded={item.prescriptionNeeded}
                  className={"mr-8"}
                />
              ))}
            </div>
          </div>
        </div>
        {/* end *Most Popular* */}
      </div>
    </div>
  );
};

export default Home;
