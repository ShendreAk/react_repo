import HomePage from "../components/homepage.jsx";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);
  return <main>
    <div className="items-container" />
    <HomePage items={items} />
  </main>
}
export default Home;
