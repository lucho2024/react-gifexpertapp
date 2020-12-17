import React, { useState } from "react";
import PropType from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  //para cambiar el valor del input y que siempre este
  //actualizado con lo ultimo que escribio el usuario
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //cambiando el estado en la categoria padre
    //como no tenemos las categories debemos hacerlo asi
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      console.log("formulario enviado");
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

//prototipos requeridos
AddCategory.propTypes = {
  setCategories: PropType.func.isRequired,
};
