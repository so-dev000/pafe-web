import { Link, useLocation } from "react-router-dom";
import { URLs } from "../constants/urls";
import { Menu } from "@mui/icons-material";
import { css } from "@emotion/react";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import { IconButton } from "@mui/material";

export const MobileHeader = () => {
  const pathname = useLocation().pathname;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header css={headerStyle}>
        <Link css={logoStyle} to={URLs.Lp}>
          PAFE
        </Link>
        {isOpen ? (
          <IconButton
            onClick={() => setIsOpen(false)}
            aria-label="close"
            css={buttonStyle}
          >
            <Close css={iconStyle}></Close>
          </IconButton>
        ) : (
          <IconButton
            onClick={() => setIsOpen(true)}
            aria-label="open"
            css={buttonStyle}
          >
            <Menu css={iconStyle}></Menu>
          </IconButton>
        )}
      </header>
      {isOpen && (
        <div css={dropDownStyle}>
          <Link
            to={URLs.About}
            css={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            <p css={fontStyle}>使い方</p>
            {pathname === "/" + URLs.About && <div css={selectedStyle}></div>}
          </Link>
          <Link to={URLs.Term} css={linkStyle} onClick={() => setIsOpen(false)}>
            <p css={fontStyle}>利用規約</p>
            {pathname === "/" + URLs.Term && <div css={selectedStyle}></div>}
          </Link>
          <Link
            to={URLs.PrivacyPolicy}
            css={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            <p css={fontStyle}>プライバシーポリシー</p>
            {pathname === "/" + URLs.PrivacyPolicy && (
              <div css={selectedStyle}></div>
            )}
          </Link>
        </div>
      )}
    </>
  );
};

const dropDownStyle = css({
  width: "100%",
  position: "sticky",
  top: "55px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "black",
  zIndex: 150,
  paddingBottom: "15px",
});
const buttonStyle = css({
  width: "50px",
  height: "50px",
  marginTop: "5px",
  marginRight: "15px",
});
const iconStyle = css({
  color: "white",
  margin: "0",
  padding: "0",
  width: "100%",
  height: "100%",
});
const headerStyle = css({
  padding: 5,
  position: "sticky",
  height: "50px",
  top: 0,
  backgroundColor: "black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: "15px",
  zIndex: 100,
});
const logoStyle = css({
  fontFamily: "Pacifico",
  margin: 0,
  fontSize: 35,
  marginLeft: "20px",
  lineHeight: 1,
  textDecoration: "none",
  color: "white",
  marginTop: "15px",
});
const linkStyle = css({
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  width: "80%",
});
const selectedStyle = css({
  backgroundColor: "white",
  height: "1px",
  width: "100px",
  marginBottom: "15px",
});
const fontStyle = css({ color: "white", marginBottom: "5px" });
