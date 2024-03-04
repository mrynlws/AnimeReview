// const getReviews = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/Anime", {
//       cache: "no-store",
//     });

//     return res.json();
//   } catch (error) {
//     console.log("Failed to get reviews", error);
//   }
// };

const Dashboard = async () => {
  // const { animes } = await getReviews();

  return (
    <div className="flex lg:grid grid-cols-2 xl:grid-cols-4 justify-around p-5">
      {/* {animes.map((anime, index) => (
        <div key={index} className="container p-5">
          <div className=" bg-slate-200 w-rounded">
          <div>{anime.title}</div>
          <div>{anime.description}</div>
          <div>{anime.genre}</div>
          <div>{anime.rating}</div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Dashboard;
