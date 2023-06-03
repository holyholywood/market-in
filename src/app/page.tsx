import Carousel from "./components/organisms/Carousel";
import SelectedCategory from "./components/organisms/SelectedCategory";
import Divider from "./components/atoms/Divider";
import HomeItemDisplay from "./components/organisms/HomeItemDisplay";
export default function Home() {
  return (
    <div className="min-h-screen space-y-6">
      <Carousel />
      <SelectedCategory />
      <Divider />
      <HomeItemDisplay />
    </div>
  );
}
