import React from 'react';
import { useTranslation } from "react-i18next";
const DeleteConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>{t("cancelConfirmationList")}</h2>
        <button onClick={onCancel}>{t("cancel")}</button>
        <button onClick={onConfirm}>{t("delete")}</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
