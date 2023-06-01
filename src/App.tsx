import "./App.css";

const cardInfo = [
  { value: 100, unit: "Posts" },
  { value: "2,242", unit: "Followers" },
  { value: "1,432", unit: "following" },
];
function App() {
  return (
    <div className="container">
      <header className="mt-8">
        <figure className="">
          <img
            src="src/assets/profilePhoto.png"
            alt="Rodney Cotton"
            className="rounded-3xl w-28 mx-auto "
          />
          <figcaption className="mt-3">
            <h3 className="font-semibold text-xl text-neutral-600 mb-1">Rodney Cotton</h3>
            <h5 className="text-sm  text-neutral-400">Helsinki, Finland</h5>
          </figcaption>
        </figure>

        <section className="flex gap-4 mt-4 w-3/4 mx-auto max-w-xs">
          {cardInfo.map(({ value, unit }) => {
            return (
              <Card
                value={value}
                unit={unit}
              />
            );
          })}
        </section>
      </header>

      <section className="grid grid-cols-3 gap-3 mt-16">
        <img
          src="src/assets/photo1.png"
          alt="img1 "
          className=" rounded-2xl col-span-1 w-max"
        />
        <img
          src="src/assets/photo2.png"
          alt="img2 "
          className=" rounded-2xl col-span-2 w-full h-full"
        />
        <img
          src="src/assets/photo3.png"
          alt="img3 "
          className=" rounded-2xl col-span-2 h-full"
        />
        <img
          src="src/assets/photo_4.png"
          alt="img4 "
          className=" rounded-2xl row-span-2 h-full"
        />
        <img
          src="src/assets/photo5.png"
          alt="img5 "
          className=" rounded-2xl row-start-3 col-start-1 h-full"
        />
        <img
          src="src/assets/photo6.png"
          alt="img6 "
          className=" rounded-2xl h-full w-full"
        />
      </section>

      <footer className="mt-24 text-gray-400 font-semibold">
        Created by <a href="github.com/1jack80">1jack80</a> -{" "}
        <a href="devchallenges.io">devChallenges</a>
      </footer>
    </div>
  );
}

export default App;

const Card = ({ value, unit }: { value: string | number; unit: string }) => {
  return (
    <div className="flex-1 py-2 text-sm rounded-2xl bg-neutral-200 ">
      <p className="font-medium text-neutral-800">{value}</p>
      <p className="text-neutral-400 capitalize">{unit}</p>
    </div>
  );
};
