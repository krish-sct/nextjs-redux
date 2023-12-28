import Map from "../app/components/Map/Map";

const locations = [
  {
    name: "India",
    latitude: 51.505, //20.5937
    longitude: -0.09, //78.9629
  },
  {
    name: "North America",
    latitude: 51.51,
    longitude: -0.1,
  },
];
export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* <Map locations={locations} /> */}
    </div>
  );
}
