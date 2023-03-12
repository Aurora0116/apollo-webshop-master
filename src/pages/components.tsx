import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components/Button";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import SliderBanner from "../components/SliderBanner";
import { CartIcon } from "../components/svgIcons";
import { CategoryItem, TopHeader } from "../components/Widget";

const Components: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apollo</title>
        <meta name="description" content="Next.js+TS Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      <Header />
      <div className="flex-initial flex-wrap flex-col">
        <Button
          variant="plain"
          title="Button"
          size="default"
          icon={<CartIcon color="#35b050" className="p-1" />}
        />
        <Button
          variant="outline"
          title="Button"
          size="small"
          icon={<CartIcon color="#35b050" className="p-1" />}
        />
        <Button
          variant="primary"
          title="Button"
          size="large"
          disabled={true}
          icon={<CartIcon color="#fff" className="p-1" />}
        />
        <h1 className="text-title-1 text-dark-gray font-semibold">
          Recommended for you
        </h1>
        <ProductItem
          title="Evony Surgical Face Mask 50 pieces"
          image="/image/demo/product-1.jpg"
          price={{
            raw: 15,
            symbol: "SAR",
            formart_with_symbol: "SAR 15.00",
          }}
          discount={{
            percent: 0.3,
          }}
          rating={3.6}
          cartAble
          prescriptionNeeded
        />

        <ProductItem
          title="Evony Surgical Face Mask 50 pieces"
          image="/image/demo/product-1.jpg"
          price={{
            raw: 15,
            symbol: "SAR",
            formart_with_symbol: "SAR 15.00",
          }}
          discount={{
            percent: 0.3,
          }}
          rating={3.6}
          cartAble
          prescriptionNeeded
          horizontal
          className="my-4"
        />
      </div>
      <SliderBanner />
      <CategoryItem
        title="Brain &#38; Cognitive"
        image="/image/categories/c-1.jpg"
        permilink="#"
      />
    </div>
  );
};

export default Components;
