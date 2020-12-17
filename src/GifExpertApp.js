import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);
  /*
  const handleApp = () => {
    /* let newCategories = categories;
    newCategories.push("labanda");
    setCategories([...newCategories]);
    //  setCategories(categories=>[...categories,'labanda']);
    setCategories(["labanda", ...categories]);
  };
  */
  return (
    <>
      <AddCategory setCategories={setCategories} />
      <h2>GifExpertApp</h2>
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
