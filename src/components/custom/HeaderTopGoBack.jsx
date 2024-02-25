import { useNavigate } from "react-router-dom";
import HeaderTop from "../header_components/HeaderTop";
import { HiArrowNarrowLeft } from "react-icons/hi";

const HeaderTopGoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This function will go back to the previous page
  };

  return (
    <div className="custom-component">
      <HeaderTop />
      <button onClick={goBack}>
        <HiArrowNarrowLeft />
        <p>go back...</p>
      </button>
    </div>
  );
};

export default HeaderTopGoBack;
