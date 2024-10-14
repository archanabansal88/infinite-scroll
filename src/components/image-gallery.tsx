import { useEffect, useState } from "react";
import Images from "./images";

const ImageGallery = () => {
  const [images, setImages] = useState<
    Array<{
      albumId: number | null;
      id: number | null;
      title: string | "";
      url: string | "";
      thumbnailUrl: string | "";
    }>
  >([]);

  const [page, setpage] = useState<number>(1);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setImages((prev) => [...prev, ...data]);
        setLoading(false);
      });
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setpage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Images images={images} />
      {loading && <div>Loading....</div>}
    </div>
  );
};

export default ImageGallery;
