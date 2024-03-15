import { Link } from "react-router-dom";
import { URLs } from "../constants/urls";

export const Header = () => {
  return (
    <>
      <header
        style={{
          padding: 5,
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          borderBottom: "solid 2px",
          borderBottomColor: "#EEEEEE",
        }}
      >
        <Link
          style={{
            fontFamily: "Pacifico",
            margin: 0,
            fontSize: 35,
            marginLeft: "20px",
            lineHeight: 1,
            position: "absolute",
            left: "0",
            top: "15px",
            textDecoration: "none",
            color: "black",
          }}
          to={URLs.Lp}
        >
          PAFE
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginLeft: "10%",
          }}
        >
          <Link to={URLs.About}>
            <p>使い方</p>
          </Link>
          <Link to={URLs.Term}>
            <p>利用規約</p>
          </Link>
          <Link to={URLs.PrivacyPolicy}>
            <p>プライバシーポリシー</p>
          </Link>
        </div>
      </header>
    </>
  );
};
