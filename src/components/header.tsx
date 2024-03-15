import { Link, useLocation } from "react-router-dom";
import { URLs } from "../constants/urls";

import { css } from "@emotion/react";

export const Header = () => {
  const pathname = useLocation().pathname;
  return (
    <>
      <header css={headerStyle}>
        <Link css={logoStyle} to={URLs.Lp}>
          PAFE
        </Link>
        <div css={headerContainerStyle}>
          <Link to={URLs.About} css={linkStyle}>
            <p css={fontStyle}>使い方</p>
            {pathname === "/" + URLs.About && <div css={selectedStyle}></div>}
          </Link>
          <Link to={URLs.Term} css={linkStyle}>
            <p css={fontStyle}>利用規約</p>
            {pathname === "/" + URLs.Term && <div css={selectedStyle}></div>}
          </Link>
          <Link to={URLs.PrivacyPolicy} css={linkStyle}>
            <p css={fontStyle}>プライバシーポリシー</p>
            {pathname === "/" + URLs.PrivacyPolicy && (
              <div css={selectedStyle}></div>
            )}
          </Link>
        </div>
      </header>
    </>
  );
};

const linkStyle = css({
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  width: "200px",
});
const selectedStyle = css({
  backgroundColor: "white",
  height: "1px",
  width: "100px",
});
const fontStyle = css({ color: "white" });
const headerStyle = css({
  padding: 5,
  position: "sticky",
  top: 0,
  backgroundColor: "black",
});
const logoStyle = css({
  fontFamily: "Pacifico",
  margin: 0,
  fontSize: 35,
  marginLeft: "20px",
  lineHeight: 1,
  position: "absolute",
  left: "0",
  top: "15px",
  textDecoration: "none",
  color: "white",
});
const headerContainerStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginLeft: "10%",
});
