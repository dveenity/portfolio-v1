import { Suspense, lazy } from "react";
import Skeleton from "../suspense/Skeleton";
import Header from "../header_components/Header";
import SnakeCanvas from "../animations/SnakeCanvas";

// Lazy Load
const LazySkills = lazy(() => import("../skills_components/Skills"));
const LazyProject = lazy(() => import("../projects_components/Projects"));
const LazyContact = lazy(() => import("../contact_components/ContactMe"));

const Routing = () => {
  return (
    <div className="route-section">
      <SnakeCanvas />
      <Header />
      <Suspense fallback={<Skeleton />}>
        <LazySkills />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <LazyProject />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <LazyContact />
      </Suspense>
    </div>
  );
};

export default Routing;
