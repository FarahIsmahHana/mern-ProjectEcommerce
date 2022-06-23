import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";

const options = {};

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="rgba(58, 180, 144, 0.945)"
      burgerColorHover="rgba(147, 202, 186, 0.945)"
      navColor1="white"
      logo="https://res.cloudinary.com/molen-mini/image/upload/v1654243099/Profile/c02267ab7593d0eb69085f8b2811a041_fnqoyz.jpg"
      logoWidth="8vmax"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.2vmax"
      link1Color="rgb(35, 35, 35, 0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="rgba(58, 180, 144, 0.945)"
      link2ColorHover="rgba(58, 180, 144, 0.945)"
      link3ColorHover="rgba(58, 180, 144, 0.945)"
      link4ColorHover="rgba(58, 180, 144, 0.945)"
      link1Margin="1vmax"
      profileIconUrl="/login"
      searchIcon={true}
      SearchIconElement={BsSearch}
      searchIconColor="rgb(35, 35, 35, 0.8)"
      profileIcon={true}
      profileIconColor="rgb(35, 35, 35, 0.8)"
      ProfileIconElement={CgProfile}
      cartIcon={true}
      CartIconElement={AiOutlineShoppingCart}
      cartIconColor="rgb(35, 35, 35, 0.8)"
      profileIconColorHover="rgba(58, 180, 144, 0.945)"
      searchIconColorHover="rgba(58, 180, 144, 0.945)"
      cartIconColorHover="rgba(58, 180, 144, 0.945)"
    />
  );
};

export default Header;
