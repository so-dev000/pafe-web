import { Link } from "react-router-dom";
import { URLs } from "../constants/urls";

import { css } from "@emotion/react";

export const Header = () => {
  return (
    <>
      <header css={headerStyle}>
        <Link css={logoStyle} to={URLs.Lp}>
          PAFE
        </Link>
        <div css={headerContainerStyle}>
          <Link to={URLs.About} css={linkStyle}>
            <p css={fontStyle}>使い方</p>
          </Link>
          <Link to={URLs.Term} css={linkStyle}>
            <p css={fontStyle}>利用規約</p>
          </Link>
          <Link to={URLs.PrivacyPolicy} css={linkStyle}>
            <p css={fontStyle}>プライバシーポリシー</p>
          </Link>
        </div>
      </header>
    </>
  );
};

const linkStyle = css({ textDecoration: "none" });
const fontStyle = css({ color: "white" });
const headerStyle = css({ padding: 5, position: "sticky", top: 0 });
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
