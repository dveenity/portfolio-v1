import { PacmanLoader } from "react-spinners";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="suspense-in">
      <PacmanLoader
        color="blue"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Skeleton;
