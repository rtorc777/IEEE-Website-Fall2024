import { Gallery } from "react-grid-gallery";
import { ph } from "../constants";

const Photos = () => {
    const images = ph.map((image) => ({
        ...image,
        customOverlay: (
          <div className="custom-overlay__caption">
            <div>{image.caption}</div>
            {image.tags &&
              image.tags.map((t, index) => (
                <div key={index} className="custom-overlay__tag">
                  {t.title}
                </div>
              ))}
          </div>
        ),
      }));

  return (
    <section className="container mx-auto my-8" id="photos">
        <h2 className="mb-8 text-center text-5xl tracking-tighter lg:text-6xl pt-14">Photos</h2>

        <Gallery images={images} enableImageSelection={false} />
    </section>
  )
}

export default Photos