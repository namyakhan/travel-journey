import "./App.css";
import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <section>{cards}</section>
      </div>
    
    </div>
  );
}
