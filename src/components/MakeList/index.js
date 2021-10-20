import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMakes } from "../../utils/apiCalls";
import Item from "../Item";

const MakeList = ({ onMakeItemClick }) => {
  const [makes, setMakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const bootstrap = () => {
    setLoading(true);
    getMakes()
      .then((data) => {
        setMakes(data);
        setLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    bootstrap();
  }, []);

  if (loading) {
    return "loading...";
  }

  if (isError) {
    return <button onClick={bootstrap}>Try Again</button>;
  }

  if (makes.length <= 0) {
    return "No Make Found";
  }

  return makes.map((make) => (
    <Item onClick={onMakeItemClick} item={make} key={make} />
  ));
};

MakeList.propTypes = {
  onMakeItemClick: PropTypes.func.isRequired,
};

export default MakeList;
