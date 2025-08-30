import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function RatingStars({ value = 0 }: { value?: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  return (
    <div
      className="flex items-center gap-0.5 text-yellow-300"
      aria-label={`Rating ${value}`}
    >
      {[...Array(full)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {half && <FaStarHalfAlt key="half" />}
      {[...Array(5 - full - (half ? 1 : 0))].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
}
