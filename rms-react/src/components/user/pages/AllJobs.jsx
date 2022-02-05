import React, { useEffect, useState } from "react";
import Loader from "../../../services/Loader";
import Footer from "../footer/Footer";
import JobItemSection from "./JobItemSection";
import NavBar from "./navigation/NavBar";

const AllJobs = () => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 300);
  }, []);
  return (
    <>
      {(loader && <Loader />) || (
        <>
          <NavBar hero="jobs" cmp="jobs" />
          <JobItemSection />
          <Footer />
        </>
      )}
    </>
  );
};

export default AllJobs;
