import "../styles/global.css";

export default function Preloader() {

  return (
    <div id="preloader">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
}