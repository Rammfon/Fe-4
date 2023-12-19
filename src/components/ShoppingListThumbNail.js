import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./ShoppingListThumbNail.css";
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { useTranslation } from 'react-i18next';

const ShoppingListThumbnail = (props) => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isArchived, setIsArchived] = useState(false);

  const handleDeleteClick = () => {
    setModalOpen(true);
  };

  const handleCancelDelete = () => {
    setModalOpen(false);
  };

  const handleConfirmDelete = () => {
    props.onDeleteList(props.list.id);
    setModalOpen(false);
  };

  useEffect(() => {
    setIsArchived(props.list.isArchived);
  }, [props.list.isArchived]);

  const handleArchiveClick = () => {
    props.onArchiveList(props.list.id, !props.list.isArchived);
  };

  return (
    <div className="shopping-list-thumbnail">
      <h2>{props.list.name}</h2>
      {props.list.owner && props.list.owner.username ? (
        <p>{t("authorLisThumbnail")} {props.list.owner.username}</p>
      ) : null}

      <Link to={`/shopping-lists/${props.list.id}`}>
        <button>{t("viewThumbnail")}</button>
      </Link>

      {props.user === props.list.owner?.username ? (
        <button onClick={() => handleDeleteClick(props.list.id)}>{t("delete")}</button>
      ) : null}

      {props.user === props.list.owner?.username ? (
        <button onClick={handleArchiveClick}>
          {isArchived ? t("unarchive") : t("archive")}
        </button>
      ) : null}

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ShoppingListThumbnail;
