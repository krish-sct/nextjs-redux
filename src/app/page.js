import Navbar from "./components/Navbar/Navbar";

const getUsers = async () => {
  const res = await fetch("");
  const users = await res.json();
  return users;
};
export default async function Home() {
  const users = await getUsers();
  console.log("users:", users);
  return (
    <div>
      <Navbar />
      Home
    </div>
  );
}
