import { useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./sections/Main";
import LoginPage from "./sections/LoginPage";
import DetailedPage from "./sections/DetailedPage";
import SignUp from "./components/LoginPage/SignUp";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/main" element={<Main />} />
            <Route path="/detailedPage" element={<DetailedPage />} />
          </Routes>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default App;
