import React from "react";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <div
        className="flex justify-center items-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
        }}
      >
        <h1>Sustainfy Energy Home page !</h1>
      </div>
    </>
  );
}

export default Home;
