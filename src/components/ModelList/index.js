import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getModels } from "../../utils/apiCalls";
import Item from "../Item";

const ModelList = ({ make, onModelItemClick }) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const bootstrap = () => {
    setLoading(true);
    getModels(make)
      .then((data) => {
        setModels(data);
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
  }, [make]);

  if (loading) {
    return "loading...";
  }

  if (isError) {
    return <button onClick={bootstrap}>Try Again</button>;
  }

  if (models.length <= 0) {
    return "No Model Found";
  }

  return models.map((model) => (
    <Item onClick={onModelItemClick} item={model} key={model} />
  ));
};

ModelList.propTypes = {
  make: PropTypes.string.isRequired,
  onModelItemClick: PropTypes.func.isRequired,
};

export default ModelList;
