import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getVehicles } from "../../utils/apiCalls";
import Item from "../Item";

const VehicleList = ({ make, model }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const bootstrap = () => {
    setLoading(true);
    getVehicles(make, model)
      .then((data) => {
        setVehicles(data);
        setLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    bootstrap();
  }, [make, model]);

  if (loading) {
    return "loading...";
  }

  if (isError) {
    return <button onClick={bootstrap}>Try Again</button>;
  }

  if (vehicles.length <= 0) {
    return "No Vehicles Found";
  }

  return vehicles.map((vehicle) => {
    const item = `${vehicle.enginePowerPS} PS, ${vehicle.enginePowerKW} KW, ${vehicle.engineCapacity} CC, ${vehicle.bodyType}, ${vehicle.fuelType}`;
    return <Item item={item} key={item} />;
  });
};

VehicleList.propTypes = {
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default VehicleList;
