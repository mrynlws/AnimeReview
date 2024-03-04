// const getReviewById = async (id) => {
//   const res = await fetch(`http://localhost:3000/api/Anime/${id}`, {
//     cache: "no-store",
//   });

import ReviewForm from "@/app/(components)/ReviewForm"

//   if (!res.ok) {
//     throw new Error("Failed to get reviews.");
//   }

//   return res.json();
// };

const ReviewPage = async () => {
  return (
    <ReviewForm />
  )
}

export default ReviewPage