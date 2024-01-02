import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          h1overview: 'All shopping lists',
          showArchivedhide: "Hide archived",
          showArchivedshow: "Show archived",
          allrights: "All rights reserved  @2023",
          createNewList: "Create new shopping list",
          newList: "New shopping list",
          listNamePlaceholder: "Name of shopping list",
          save: "Save",
          createListError: "You have not filled in the name of the shopping list.",
          authorLisThumbnail:"Created by:  ",
          viewThumbnail:"View",
          delete: "Delete",
          archive:"Archive",
          unarchive: "Unarchive",
          createItemPlaceholder: "Name of item",
          createItemButton: "Add item",
          add: "Add",
          nameNewMember: "Name of member",
          cancel: "Cancel",
          cancelConfirmationList: "Do you really want to delete this shopping list?",
          newNameList:"New name",
          homepage: "Return to homepage",
          leaveList: "Leave the shopping list",
          removeMember: "Remove member",
          viewAsOwner: "View as owner",
          viewAsMember: "View as member",
          edit: "Edit",
          addMember: "Add member",
          listMembers: "Shopping list members:",
          filter: "Filters",
          all: "All",
          resolved: "Resolved",
          unresolved: "Unresolved",
          listItems: "Shopping list items:",
          addItem: "Add item",
          chartTitle: "Overview of shopping lists",
          itemCount: "Number of items",
          noDataAvailable: "no data available"
        },
      },
      cs: {
        translation: {
          h1overview: 'Všechny nákupní seznamy',
          showArchivedhide: "Skrýt archivované",
          showArchivedshow: "Zobrazit archivované",
          allrights: "Všechna práva vyhrazena @2023",
          createNewList: "Vytvořit nový seznam",
          newList: "Nový seznam",
          listNamePlaceholder: "Název seznamu",
          save: "Uložit",
          createListError: "Nemáte vyplněný název seznamu.",
          authorLisThumbnail: "Vytvořil: ",
          viewThumbnail:"Zobrazit",
          delete: "Smazat",
          archive: "Archivovat",
          unarchive: "Odarchivovat",
          createItemPlaceholder: "Název položky",
          createItemButton: "Přidat položku",
          add: "Přidat",
          nameNewMember: "Jméno člena",
          cancel: "Zrušit",
          cancelConfirmationList: "Opravdu chcete smazat tento seznam?",
          newNameList:"Nový název seznamu",
          homepage: "Zpět na hlavní stránku",
          leaveList:"Odejít ze seznamu",
          removeMember: "Odebrat člena",
          viewAsOwner: "Zobrazit jako vlastník",
          viewAsMember: "Zobrazit jako člen",
          edit:"Editovat",
          addMember: "Přidat člena",
          listMembers: "Členové nákupního seznamu:",
          filter: "Filtry",
          all: "Vše",
          resolved: "Vyřešené",
          unresolved: "Nevyřešené",
          listItems: "Položky nákupního seznamu:",
          addItem: "Přidat položku",
          chartTitle: "Přehled nákupních seznamů",
          itemCount: "Počet položek",
          noDataAvailable: "K dispozici nejsou žádná data"
          
          

        },
      },
    },
   
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
