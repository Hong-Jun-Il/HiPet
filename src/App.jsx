import { useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from "./sections/Home";
import routes from "./utils/constants/routes";
import { Routes, Route } from "react-router-dom";


function App() {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            // ... all available Locomotive Scroll instance options 
          }
        }
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Routes>
            <Route path={routes.hong} element={<Home />} />
          </Routes>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
