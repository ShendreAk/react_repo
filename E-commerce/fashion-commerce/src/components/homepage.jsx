import DisplayHome from "./item.jsx"

const HomePage = ({ items }) => {
  return items.map((item) => <DisplayHome key={item.id} item={item} />)
}
export default HomePage;