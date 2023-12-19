import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const AddMember = ({ onAddMember }) => {
  const [newMember, setNewMember] = useState("");
  const { t } = useTranslation();
  const handleAddClick = () => {
    if (newMember.trim() !== "") {
      onAddMember(newMember);
      setNewMember("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={t("nameNewMember")}
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
      />
      <button className="button" onClick={handleAddClick}>{t("Add")}</button>
    </div>
  );
};

export default AddMember;
