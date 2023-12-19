import React from "react";
import { useTranslation } from "react-i18next";
const RemoveItem = ({ itemId, onRemoveItem }) => {
  const { t } = useTranslation();
  const handleRemoveClick = () => {
    onRemoveItem(itemId);
  };

  return (
    <button className="button" onClick={handleRemoveClick}>
      {t("delete")}
    </button>
  );
};

export default RemoveItem;
