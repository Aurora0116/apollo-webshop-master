import { StarEmpty, StarFull, StarHalf } from "./svgIcons";

export default function RatingStars(props: { rating: number }) {
  const { rating } = props;
  return (
    <div className="flex items-center my-2">
      {[1, 2, 3, 4, 5].map((item, key) =>
        Math.floor(rating) > key ? (
          <StarFull key={key} />
        ) : rating - key > 0.5 ? (
          <StarHalf key={key} />
        ) : (
          <StarEmpty key={key} />
        )
      )}
    </div>
  );
}
