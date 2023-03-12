import { Button } from "./Button";
import RatingStars from "./RatingStars";
import { AddCartIcon } from "./svgIcons";
import { ProductItemDiscountRibbon } from "./Widget";

export default function ProductItem(props: {
  title?: string;
  rating?: number;
  discount?: {
    percent?: number;
    price?: number;
  };
  image?: string;
  price?: {
    raw: number;
    symbol: string;
    formart_with_symbol: string;
  };
  cartAble?: boolean;
  prescriptionNeeded?: boolean;
  horizontal?: boolean;
  className?: string;
}) {
  const {
    title,
    rating,
    discount,
    image,
    price,
    cartAble,
    prescriptionNeeded,
    className,
    horizontal,
  } = props;
  return horizontal ? (
    <HorizontalItem
      title={title}
      rating={rating}
      discount={discount}
      image={image}
      price={price}
      cartAble={cartAble}
      prescriptionNeeded={prescriptionNeeded}
      className={className}
    />
  ) : (
    <VerticalItem
      title={title}
      rating={rating}
      discount={discount}
      image={image}
      price={price}
      cartAble={cartAble}
      prescriptionNeeded={prescriptionNeeded}
      className={className}
    />
  );
}

const VerticalItem = (props: {
  title?: string;
  rating?: number;
  discount?: {
    percent?: number;
    price?: number;
  };
  image?: string;
  price?: {
    raw: number;
    symbol: string;
    formart_with_symbol: string;
  };
  cartAble?: boolean;
  prescriptionNeeded?: boolean;
  horizontal?: boolean;
  className?: string;
}) => {
  const {
    title,
    rating,
    discount,
    image,
    price,
    cartAble,
    prescriptionNeeded,
    className,
  } = props;
  return (
    <div className={`max-w-[180px] p-2 bg-white rounded-r ${className}`}>
      <div className="rounded-lg">
        {/* eslint-disalbe-next-line */}
        <img
          src={image}
          className="w-full h-[120px] object-cover rounded-lg border-[#ececec] border-[1px]"
          alt=""
        />
      </div>
      <h5
        className={`text-footnote my-2.5 text-gray-900 ${rating ? "mb-0" : ""}`}
      >
        {title}
      </h5>
      {rating && <RatingStars rating={rating} />}
      <div className="flex items-center">
        {(discount?.percent || discount?.price) && (
          <ProductItemDiscountRibbon percent={discount?.percent} />
        )}
        <div>
          <h5 className="text-headline font-bold text-dark-gray">
            {price?.formart_with_symbol}
          </h5>
          {(discount?.percent || discount?.price) && price && (
            <p className="text-caption-1 line-through text-light-gray">
              {discount.percent &&
                `${price.symbol} ${price.raw - discount.percent * price?.raw}`}
            </p>
          )}
        </div>
      </div>
      {cartAble && (
        <Button
          title="Add to Cart"
          icon={<AddCartIcon />}
          fullWidth
          className="mt-2.5"
          size="small"
        />
      )}
      {prescriptionNeeded && (
        <h5 className="text-warning font-bold text-caption-1 mt-2.5">
          Prescription needed
        </h5>
      )}
    </div>
  );
};

const HorizontalItem = (props: {
  title?: string;
  rating?: number;
  discount?: {
    percent?: number;
    price?: number;
  };
  image?: string;
  price?: {
    raw: number;
    symbol: string;
    formart_with_symbol: string;
  };
  cartAble?: boolean;
  prescriptionNeeded?: boolean;
  horizontal?: boolean;
  className?: string;
}) => {
  const {
    title,
    rating,
    discount,
    image,
    price,
    cartAble,
    prescriptionNeeded,
    className,
  } = props;
  return (
    <div className={`max-w-[33%] p-2 bg-white rounded-r flex ${className}`}>
      <div className="rounded-lg mr-2.5">
        {/* eslint-disalbe-next-line */}
        <img
          src={image}
          className="w-[120px] h-[100px] object-cover rounded-lg border-[#ececec] border-[1px]"
          alt=""
        />
      </div>
      <div className="w-[calc(100%-130px)]">
        <h5
          className={`text-footnote my-2.5 text-gray-900 ${
            rating ? "mb-0" : ""
          }`}
        >
          {title}
        </h5>
        {rating && <RatingStars rating={rating} />}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <h5 className="text-headline font-bold text-dark-gray">
                {price?.formart_with_symbol}
              </h5>
              {(discount?.percent || discount?.price) && price && (
                <p className="text-caption-1 line-through text-light-gray">
                  {discount.percent &&
                    `${price.symbol} ${
                      price.raw - discount.percent * price?.raw
                    }`}
                </p>
              )}
            </div>
          </div>
          {cartAble && (
            <button className="inline-flex border-2 items-center apollo-button rounded-lg disabled:opacity-40 disabled:pointer-events-none justify-center border-primary bg-primary hover:border-secondary hover:bg-secondary w-10 h-10 icon-buttom">
              <AddCartIcon />
            </button>
          )}
        </div>
        {prescriptionNeeded && (
          <h5 className="text-warning font-bold text-caption-1 mt-2.5">
            Prescription needed
          </h5>
        )}
      </div>
    </div>
  );
};
