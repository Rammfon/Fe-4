import React from 'react';
import { Link } from 'react-router-dom';
import "./ShoppingListThumbNail.css"
import { useTranslation } from "react-i18next";
const ShoppingListThumbnailWithDelete = () => {
  
  const { t } = useTranslation();
  return (
    
        <button>{t("delete")}</button>
   
  );
};

export default ShoppingListThumbnailWithDelete;
