import React from "react";
import SEO from "./SEO";
import { handleDateString } from "../../utils/common";

const TemplatePreview = ({ templateData, title, createdAt }) => {
  return (
    <div className="preview-wrapper">
      <div>
        {createdAt && (
          <div>
            <p className="f-r color-navy">{handleDateString(createdAt)}</p>
          </div>
        )}
        {templateData?.map((e, i) => {
          return (
            <div key={i}>
              {e?.key === "header" ? (
                <div>
                  <h2 className="header">{e?.value}</h2>
                </div>
              ) : (
                ""
              )}
              {e?.key === "title" ? (
                <div>
                  <h3 className="title">{e?.value}</h3>
                </div>
              ) : (
                ""
              )}
              {e?.key === "subTitle" ? (
                <div>
                  <b className="subTitle">{e?.value}</b>
                </div>
              ) : (
                ""
              )}
              {e?.key === "description" ? (
                <div className="description">{e?.value}</div>
              ) : (
                ""
              )}
              {e?.imgs && e?.imgs.length > 0 && e?.key === "images" ? (
                <div className="images">
                  {e?.imgs?.map((img, imgI) => {
                    return (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="images-img"
                        src={img?.src}
                        alt={img?.alt}
                        key={imgI}
                        loading="lazy"
                      />
                    );
                  })}
                </div>
              ) : (
                ""
              )}

              {e?.key === "list" ? (
                <div className="lists">
                  <ul>
                    {e?.lists?.map((list, listI) => {
                      return (
                        <li className="list" key={listI}>
                          {list?.value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                ""
              )}
              {e?.key === "htmlEditor" ? (
                <div className="htmlEditor">
                  <div dangerouslySetInnerHTML={{ __html: e?.value }} />
                </div>
              ) : (
                ""
              )}
              {e?.key === "banner" ? (
                <div class="banner">
                  <img
                    // eslint-disable-next-line @next/next/no-img-element
                    src="https://picsum.photos/800/300"
                    alt="Nature Banner"
                  />
                  <h1>Welcome to our Website</h1>
                  <p>Discover amazing things here!</p>
                  <button>Explore Now</button>
                </div>
              ) : (
                ""
              )}
              {e?.key === "date" ? (
                <div>
                  <div className="date">{e?.value}</div>
                </div>
              ) : (
                ""
              )}
              {e?.key === "seo" ? <SEO data={e.value} title={title} /> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemplatePreview;
