type ImagesProps = {
  images: Array<{
    albumId: number | null;
    id: number | null;
    title: string | "";
    url: string | "";
    thumbnailUrl: string | "";
  }>;
};

const Images = ({ images }: ImagesProps) => {
  return (
    <div className="image-container">
      {images &&
        images.map(({ id, title, url }, index) => {
          return (
            <div key={index}>
              <img src={url} alt={title} />
              <div>{id}</div>
              <div>{title}</div>
            </div>
          );
        })}
    </div>
  );
};
export default Images;
