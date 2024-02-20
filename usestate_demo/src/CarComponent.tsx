import React, { useState } from "react";
import { CarDetail } from "./models/CarObjects";

function CarComponent() {
  const [cars, setCars] = useState<CarDetail[]>([
    {
      brand: "Ford",
      model: "Mustang",
      year: 1964,
      color: "red",
    },
  ]);

  const changeColor = (model: string) => {
    setCars((prevCars) => {
      return prevCars.map((car) => {
        if (car.model == model) {
          car = { ...car, color: "blue" };
        }
        return car;
      });
    });
  };

  return (
    <div>
      {cars.map((car) => {
        return (
          <p>
            Brand: {car.brand} - Model: {car.model} - Year:{car.year} - Color:{" "}
            {car.color}{" "}
            <button onClick={() => changeColor(car.model)}>
              Update color to blue
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default CarComponent;
