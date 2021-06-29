import { useEffect } from "react";
import { useFavEmoji } from "./useFavEmoji";
import { useToggle } from "./useToggle";

const moons = `🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘`.split(" ").reverse();

export const useMoonSpinner = (initialState?: string) => {
  const update = useFavEmoji(initialState);
  const [state, toggle] = useToggle(false);

  useEffect(() => {
    if (!state) {
      update(initialState);
      return;
    }
    let i = 0;
    update(moons[i % moons.length]);
    const interval = setInterval(() => {
      i++;
      update(moons[i % moons.length]);
    }, 500);
    return () => clearInterval(interval);
  }, [state, update]);

  return toggle;
};
