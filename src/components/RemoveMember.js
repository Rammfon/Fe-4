
import { useTranslation } from "react-i18next";
const RemoveMember = ({ member, onRemove }) => {
  const { t } = useTranslation();
  const handleRemove = () => {
    onRemove(member); 
  };

  return (
    <button  className="button" onClick={handleRemove}>{t("removeMember")}</button>
  );
};

export default RemoveMember;

