import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const EditShoppingListName = ({ currentName, onSave }) => {
  const [newName, setNewName] = useState(currentName);
  const { t } = useTranslation();
 
  useEffect(() => {
    setNewName(currentName);
  }, [currentName]);

  const handleSave = () => {
    onSave(newName);
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder={t("newNameList")}
      />
      <button onClick={handleSave}>{t("save")}</button>
    </div>
  );
};
export default EditShoppingListName;
