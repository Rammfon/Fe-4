import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from "react-i18next";
const AddItem = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState("");
  const { t } = useTranslation();
  const handleAddClick = () => {
    console.log("New Item Name:", newItem);


    if (typeof newItem === 'string' && newItem.trim() !== "") {
      const newItemObject = { itemId: uuidv4(), itemName: newItem.trim(), resolved: "nevyřešená" };
      console.log("New Item Object:", newItemObject);

      onAddItem(newItem);
      setNewItem("");
    } else {
      console.log("Invalid Item Name");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={t("createItemPlaceholder")}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="button" onClick={handleAddClick}>{t("createItemButton")}</button>
    </div>
  );
};

export default AddItem;
