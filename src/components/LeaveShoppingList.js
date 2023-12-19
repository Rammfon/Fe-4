import React from "react";
import { useTranslation } from "react-i18next";

const LeaveShoppingList = ({ onLeave }) => {
  const { t } = useTranslation();
  const handleLeave = () => {
    onLeave(); 
  };

  return (
    <button className="button" onClick={handleLeave}>{t("leaveList")}</button>
  );
};

export default LeaveShoppingList