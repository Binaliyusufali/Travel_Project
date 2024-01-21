import React from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";

import img from "../../Assets/img(1).jpg";
import img2 from "../../Assets/img(2).jpg";
import img3 from "../../Assets/img(3).jpg";
import img4 from "../../Assets/img(4).jpg";
import img5 from "../../Assets/img(5).jpg";
import img6 from "../../Assets/img(6).jpg";
import img7 from "../../Assets/img(7).jpg";
import img8 from "../../Assets/img(8).jpg";
import img9 from "../../Assets/img(8).jpg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Uludağ",
    location: "Bursa",
    grade: "Cultural Relax",
    fees: "₺700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis architecto aperiam tempora ab nobis doloribus animi vitae numquam adipisci.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Uludağ",
    location: "Bursa",
    grade: "Cultural Relax",
    fees: "₺600",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis architecto aperiam tempora ab nobis doloribus animi vitae numquam adipisci.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Uludağ",
    location: "Bursa",
    grade: "Cultural Relax",
    fees: "₺800",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis architecto aperiam tempora ab nobis doloribus animi vitae numquam adipisci.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Uludağ",
    location: "Bursa",
    grade: "Cultural Relax",
    fees: "₺7800",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis architecto aperiam tempora ab nobis doloribus animi vitae numquam adipisci.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Uludağ",
    location: "Bursa",
    grade: "Cultural Relax",
    fees: "₺200",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis architecto aperiam tempora ab nobis doloribus animi vitae numquam adipisci.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Uludağ",
    location: "Bursa",
    grade: "Cultural Relax",
    fees: "₺790",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis architecto aperiam tempora ab nobis doloribus animi vitae numquam adipisci.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Uludağ",
    location: "Bursa",
    grade: "Cultural Relax",
    fees: "₺500",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis architecto aperiam tempora ab nobis doloribus animi vitae numquam adipisci.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Uludağ",
    location: "Bursa",
    grade: "Cultural Relax",
    fees: "₺690",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis architecto aperiam tempora ab nobis doloribus animi vitae numquam adipisci.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Uludağ",
    location: "Bursa",
    grade: "Cultural Relax",
    fees: "₺700",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reiciendis architecto aperiam tempora ab nobis doloribus animi vitae numquam adipisci.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <BsClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
