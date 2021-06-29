import { useEffect, useState } from "react";

export const useFavEmoji = (initialState?: string) => {
  const [emoji, setEmoji] = useState(initialState);

  useEffect(() => {
    if (!emoji) return;

    const link: HTMLLinkElement =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E %3Ctext y='28' font-size='32'%3E${emoji}%3C/text%3E %3C/svg%3E`;

    document.getElementsByTagName("head")[0].appendChild(link);
  }, [emoji]);

  return setEmoji;
};
