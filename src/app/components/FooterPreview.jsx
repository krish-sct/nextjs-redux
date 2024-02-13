import React, { useState } from "react";
import { handleDateString } from "../../utils/common";

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
              {item?.components?.filter((e) => e.key === "images")?.length >
                0 && (
                <div className="images">
                  {item.components.find((e) => e.key === "images")
                    ?.imgs?.[0] && (
                    <img
                      className="footerComplisting-img"
                      src={
                        item.components.find((e) => e.key === "images")?.imgs[0]
                          ?.src
                      }
                      alt={
                        item.components.find((e) => e.key === "images")?.imgs[0]
                          ?.alt
                      }
                      onLoad={handleImageLoad}
                    />
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
