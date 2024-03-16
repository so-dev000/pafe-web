import { css } from "@emotion/react";

export const NotFound = () => {
  return (
    <div css={containerStyle}>
      <h3 css={textStyle}>ページが見つかりません</h3>;
    </div>
  );
};

const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const textStyle = css({ color: "#EEEEEE" });
