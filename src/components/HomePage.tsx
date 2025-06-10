import React from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  BlogList,
  Contact,
  Footer,
} from "./index";
import FadeIn from './FadeIn';

function HomePage() {
  return (
    <>
      <FadeIn transitionDuration={700}>
        <Main/>
        <Project/>
        {/* <Expertise/> */}
        <Timeline/>
        <BlogList/>
        <Contact/>
      </FadeIn>
      <Footer />
    </>
  );
}

export default HomePage; 