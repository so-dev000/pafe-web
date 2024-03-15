import { css, keyframes } from "@emotion/react";
import ScreenShotMain from "../../assets/screenshot_main.png";
export const Lp = () => {
  return (
    <div css={containerStyle}>
      <img src={ScreenShotMain} css={imageStyle}></img>;
      <h3 css={h3Style}>投票専用SNS</h3>
      <h1 css={logoStyle}>PAFE</h1>
    </div>
  );
};
const logoAnimation = keyframes`
0%{
    margin-top: 7%;
    opacity: 0;
}
100% {
    margin-top: 8%;
    opacity: 1;
}
`;
const logoStyle = css({
  fontFamily: "Pacifico",
  fontSize: 50,
  lineHeight: 1,
  position: "absolute",
  margin: "8% 30%",
  color: "#EEEEEE",
  animation: `${logoAnimation} 2s`,
});

const h3Animation = keyframes`
0%{
    margin-top: 4%;
    opacity: 0;
}
100% {
    margin-top: 5%;
    opacity: 1;
}
`;

const h3Style = css({
  color: "white",
  position: "absolute",
  margin: "5% 30%",
  animation: `${h3Animation} 2s`,
});

const containerStyle = css({
  display: "flex",
  flexDirection: "row",
});

const imageAnimation = keyframes`
0%{
    margin-left: 0%;
}
100% {
    margin-left: 5%;
}
`;

const imageStyle = css({
  width: "300px",
  margin: "5% 5%",
  animation: `${imageAnimation} 1s`,
});
