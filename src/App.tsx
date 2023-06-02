import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const cardInfo = [
  { value: 100, unit: "Posts" },
  { value: "2,242", unit: "Followers" },
  { value: "1,432", unit: "following" },
];

function App() {
  return (
    <div className="container max-w-3xl mx-auto">
      <header className="mt-8">
        <figure className="">
          <img
            src="./profilePhoto.png"
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
                key={value + unit}
                value={value}
                unit={unit}
              />
            );
          })}
        </section>
      </header>

      <section className="grid grid-cols-3 gap-3 mt-16">
        <Image imageUrl="./photo1.png" />
        <Image
          imageUrl="./photo2.png"
          className="col-span-2"
        />
        <Image
          imageUrl="./photo3.png"
          className="col-span-2"
        />
        <Image
          imageUrl="./photo_4.png"
          className="row-span-2"
        />
        <Image imageUrl="./photo5.png" />
        <Image imageUrl="./photo6.png" />
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
    <div className="flex-1 py-3 px-3 text-sm rounded-2xl bg-neutral-200 ">
      <p className="font-semibold text-neutral-600">{value}</p>
      <p className="text-neutral-400 capitalize">{unit}</p>
    </div>
  );
};

const Image = ({ imageUrl, className }: { imageUrl: string; className?: string }) => {
  const { isLoading, data } = useQuery({
    queryKey: [imageUrl],
    queryFn: () =>
      fetch(imageUrl)
        .then((res) => res.blob())
        .then((blob) => URL.createObjectURL(blob))
        .catch((error) => error),
  });
  return (
    <div className={"rounded-2xl overflow-hidden " + className}>
      {isLoading ? (
        <Skeleton className="w-full min-h-[220px] h-full" />
      ) : (
        <img
          src={data}
          alt="img1"
          className="w-full h-full"
        />
      )}
    </div>
  );
};
