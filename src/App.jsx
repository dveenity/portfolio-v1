import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routing from "./components/custom/Routing";
import Preloader from "./components/Preloader";

// Lazy Loading
const LazyAbout = React.lazy(() =>
  import("./components/skills_components/About")
);
const LazyFirst = React.lazy(() =>
  import("./components/projects_components/FirstProject")
);
const LazySecond = React.lazy(() =>
  import("./components/projects_components/SecondProject")
);
const LazyThird = React.lazy(() =>
  import("./components/projects_components/ThirdProject")
);
const LazyFourth = React.lazy(() =>
  import("./components/projects_components/FourthProject")
);

import Skeleton from "./components/suspense/Skeleton";

function App() {
  return (
    <Router>
      <>
        <Preloader />
        <Routes>
          <Route path="/" element={<Routing />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route
            path="/first"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyFirst />
              </Suspense>
            }
          />
          <Route
            path="/second"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazySecond />
              </Suspense>
            }
          />
          <Route
            path="/third"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyThird />
              </Suspense>
            }
          />
          <Route
            path="/fourth"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyFourth />
              </Suspense>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
