import React, { Suspense, useState } from "react";
import { handleDateString } from "../../utils/common";
import Image from "next/image";

const FooterPreview = ({ data, dataTemplate }) => {
  // console.log(data, dataTemplate);

  const [imgWidth, setImgWidth] = useState(null);

  const handleImageLoad = (e) => {
    setImgWidth(e.target.width);
  };

  return (
    <ul className="ul">
      {data?.map((item, i) => (
        <div key={i} className="footerComp-card">
          <li>
            <a href={`/${dataTemplate}/${item._id}`} className="temp-link">
              {item?.components?.filter((e) => e?.key === "images")?.length >
                0 && (
                <div className="images">
                  {item?.components?.find((e) => e?.key === "images")
                    ?.imgs?.[0] && (
                    <Suspense
                      fallback={<div className="spinner">Loading...</div>}
                    >
                      <Image
                        className="footerComplisting-img"
                        src={
                          item?.components?.find((e) => e?.key === "images")
                            ?.imgs[0]?.src
                        }
                        alt={
                          item?.components?.find((e) => e?.key === "images")
                            ?.imgs[0]?.alt
                        }
                        onLoad={handleImageLoad}
                        width={300}
                        height={150}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Suspense>
                  )}
                </div>
              )}

              <div className="f-r color-navy">
                {handleDateString(item.createdAt)}
              </div>
              <br />
              <div className="list-header" style={{ width: imgWidth }}>
                {
                  item?.components?.filter((e) => e.key === "header")?.[0]
                    ?.value
                }
              </div>
              <div className="listing-description" style={{ width: imgWidth }}>
                {
                  item?.components?.filter((e) => e.key === "description")?.[0]
                    ?.value
                }
              </div>
              <div className="color-navy">
                {
                  item?.components?.filter((e) => e.key === "subTitle")?.[0]
                    ?.value
                }
              </div>
            </a>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default FooterPreview;
