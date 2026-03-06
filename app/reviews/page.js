import FeedBack from "@/src/components/layout/feedBack/FeedBack";

export default function Page() {
  return (
    <>
      <div itemScope itemType="https://schema.org/AggregateRating">
        ⭐⭐⭐⭐⭐ <span itemProp="ratingValue">4.9</span>/5
        (<span itemProp="reviewCount">1527</span> đánh giá)
      </div>
      <FeedBack />
      <div>
        ⭐⭐⭐⭐⭐ 4.9/5 (1527 đánh giá)
      </div>
    </>
  )
}