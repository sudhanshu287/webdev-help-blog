import React from "react";
import "./SocialsCard.css";
import LogoImg from "../../assets/wdh-small-logo.png";
import InstagramImg from "../../assets/instagarm-icon.png";
import FbImg from "../../assets/fb-icon.png";
import LinkedinImg from "../../assets/linkedin-icon.png";
import QuoraImg from "../../assets/quora-icon.png";
import GithubImg from "../../assets/github-icon.png";
const SocialsCard = () => {
  const socialsImg = [
    {
      id: 1,
      imgUrl: InstagramImg,
    },
    {
      id: 2,
      imgUrl: FbImg,
    },
    {
      id: 3,
      imgUrl: LinkedinImg,
    },
    {
      id: 4,
      imgUrl: QuoraImg,
    },
    {
      id: 5,
      imgUrl: GithubImg,
    },
  ];
  return (
    <div className="card aside-card social-card">
      <a href="/" className="logo">
        <img
          src={LogoImg}
          width="119"
          height="37"
          loading="lazy"
          alt="Wren logo"
        />
      </a>
      <p className="card-text">Follow us on Social Media</p>
      <ul className="social-list">
        {socialsImg.map((item) => {
          return (
            <li key={item.id}>
              <a href="#" className="social-box img-holder">
                <img
                  src={item.imgUrl}
                  width="276"
                  height="277"
                  loading="lazy"
                  alt="insta post"
                  className="img-cover"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialsCard;
