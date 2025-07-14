import { InfiniteSlider } from "../../components/ui/infinite-slider";

const SliderSection = () => {
  return (
    <div className="relative w-full h-[200px] p-[10] flex items-center justify-center overflow-hidden">
      <InfiniteSlider gap={30} reverse className="w-full h-full">
        <img
          src="https://cdn.simpleicons.org/react/61DAFB"
          alt="React"
          className="h-[90px] w-auto"
        />
        <img
          src="https://cdn.simpleicons.org/nodedotjs/339933"
          alt="Nodejs"
          className="h-[90px] w-auto"
        />
        <img
          src="https://cdn.simpleicons.org/mysql/4479A1"
          alt="mysql"
          className="h-[90px] w-auto"
        />
        <img
          src="https://cdn.simpleicons.org/angular/DD0031"
          alt="Angular"
          className="h-[90px] w-auto"
        />
        <img
          src="https://cdn.simpleicons.org/docker/2496ED"
          alt="docker"
          className="h-[90px] w-auto"
        />
        <img
          src="https://cdn.simpleicons.org/git/F05032"
          alt="Git"
          className="h-[90px] w-auto"
        />
        <img
          src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
          alt="tailwind"
          className="h-[90px] w-auto"
        />
        
      </InfiniteSlider>
    </div>
  );
};

export default SliderSection;
