import { Layout } from "../../component/Layout";
import { Banner } from "../../component/Banner";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import gallery from "../../data/gallery.json";

const GalleryPage = () => {
  return (
    <Layout title="Gallery">
      {/* Banner */}
      <Banner page="Gallery" />

      <div className="section-block section-sm border-bottom partners">
        <div className="text-center">
          {gallery.map((rec, idx) => (
            <div className="p-5 border-bottom">
              <strong key={idx} className="d-block mb-5 text-left ml-5">
                {" "}
                {rec?.date_range}
              </strong>
              <Gallery>
                {rec?.images.map((rec, idx) => (
                  <Item
                    key={idx}
                    original={rec?.original_img}
                    thumbnail={rec?.thumbnail_img}
                    width="1024"
                    height="768"
                    title={rec?.desc}
                  >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={rec?.thumbnail_img}
                        style={{
                          margin: "1px",
                          border: "10px solid lightgrey",
                          cursor: "pointer",
                        }}
                      />
                    )}
                  </Item>
                ))}
              </Gallery>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
