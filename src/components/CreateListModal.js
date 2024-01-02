import React, { useState } from "react";
import "./CreateListModal.css";
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

export default function CreateListModal({ onCreateList, toggleModal, isModalOpen, user }) {
  const { t } = useTranslation();
  const [listName, setListName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSaveList = async () => {
    if (!listName.trim()) {
      setErrorMessage(t("createListError"));
      return;
    }

    const newList = {
      id: Date.now().toString(),
      name: listName,
      owner: { username: user },
     
      isArchived: false,
      members: [{ username: user, role: 'owner' }],
      items: [],
    };

    try {
     
      await onCreateList(newList);

      
      toggleModal();
      setListName('');
      setErrorMessage('');
    } catch (error) {
      console.error('Chyba při vytváření seznamu:', error);
    }
  };

  const handleInputChange = (e) => {
    setErrorMessage('');
    setListName(e.target.value);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {t("createNewList")}
      </button>

      {isModalOpen && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{t("newList")}</h2>
            <input
              type="text"
              id="listName"
              placeholder={t("listNamePlaceholder")}
              value={listName}
              onChange={handleInputChange}
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <button className="close-modal" onClick={handleSaveList}>
            {t("save")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
