import React from "react";
import PropTypes from "prop-types";
import s from "./Item.module.scss";

const Item = ({ item, onClick }) => {
  const handleItemClick = () => {
    onClick(item);
  };
  return (
    <div className={s.container} onClick={handleItemClick}>
      {item}
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Item.defaultProps = {
  onClick: () => null,
};

export default Item;
