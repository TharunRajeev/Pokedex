import logo from "../../Assets/Images/pokeball.gif";

function LoadingBoxes() {
  return (
    <div className="loader">
      <img src={logo.src} />
    </div>
  );
}

export default LoadingBoxes;
