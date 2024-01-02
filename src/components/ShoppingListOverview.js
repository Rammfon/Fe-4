import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mockup from '../Data/Mockup';
import ShoppingListThumbnail from './ShoppingListThumbNail';
import CreateListModal from './CreateListModal';
import api from "./ApiWrapper"
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const ShoppingListOverview = () => {
  const { t } = useTranslation();

  const shoppingListsData = mockup.shoppingLists; 
  const [shoppingLists, setShoppingLists] = useState(shoppingListsData);
  const [showArchived, setShowArchived] = useState(false);
  const [archivedLists, setArchivedLists] = useState([]);
  const owners = Array.from(new Set(shoppingListsData.map((list) => list.owner.username)));
  const [currentUser, setCurrentUser] = useState(owners[0]);
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState([]);
  const maxDataValue = Math.max(...shoppingLists.map(list => list.items.length));
  useEffect(() => {
    const fetchShoppingLists = async () => {
      try {
        setLoading(true);
        const lists = await api.getShoppingLists();
        setData(lists);
        setShoppingLists(lists);
  
        // Příprava dat pro graf
        const chartData = lists.map((list) => ({
          name: list.name,
          itemCount: list.items.length,
        }));
        setChartData(chartData);
      } catch (error) {
        setError(error);
        console.error(`Chyba při předávání dat: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
  
    fetchShoppingLists();
  }, []);


  
  const handleOwnerChange = (owner) => {
    setCurrentUser(owner);
    setLastClickedButton(owner);
  };



  const handleCreateList = async (newList) => {
    try {
      
      const addedList = await api.addShoppingList(newList);
      console.log('Added List:', addedList);

     
      setShoppingLists((prevLists) => [...prevLists, addedList]);
          const newChartData = [
      ...chartData,
      {
        name: addedList.name,
        itemCount: addedList.items.length,
      },
    ];
    setChartData(newChartData);
    } catch (error) {
      
      console.error('Chyba při přidávání seznamu:', error);
    }
  };


  const handleDeleteList = async (listId) => {
    try {
      const listToDelete = shoppingLists.find((list) => list.id === listId);
  
      if (!listToDelete) {
        console.error(`List with ID ${listId} not found.`);
        return;
      }
  
      await api.deleteShoppingList(listId);
  
      // Update shoppingLists state
      const updatedLists = shoppingLists.filter((list) => list.id !== listId);
      setShoppingLists(updatedLists);
  
      // Update archivedLists state
      setArchivedLists(archivedLists.filter((list) => list.id !== listId));
  
      // Update chartData
      const updatedChartData = chartData.filter((data) => data.name !== listToDelete.name);
      setChartData(updatedChartData);
    } catch (error) {
      console.error(`Chyba při mazání seznamu s ID ${listId}:`, error);
    }
  };
  

  console.log (shoppingLists)




  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    const detailClick = (shoppingListId) => {
      navigate(`/shopping-lists/${shoppingListId}`);
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleArchiveList = async (listId, isArchived) => {
    try {
    
      await api.archiveShoppingList(listId, isArchived);
  
     
      const updatedLists = shoppingLists.map((list) =>
        list.id === listId ? { ...list, isArchived } : list
      );
      setShoppingLists(updatedLists);
  
      if (isArchived) {
        setArchivedLists([...archivedLists, shoppingLists.find((list) => list.id === listId)]);
      } else {
        setArchivedLists(archivedLists.filter((list) => list.id !== listId));
      }
    } catch (error) {
      console.error(`Chyba při archivaci seznamu s ID ${listId}:`, error);
    }
  };

  const handleToggleShowArchived = () => {
    setShowArchived(!showArchived);
  };

  return (
    <div className="shopping-list-overview">
      <div>
      <button onClick={handleToggleShowArchived}>
  {showArchived ? t('showArchivedhide') : t('showArchivedshow')}
</button>

        {owners.map((owner) => (
          <button className='button'
            key={owner}
            onClick={() => handleOwnerChange(owner)}
            
          >
            {owner}
          </button>
        ))}
      </div>
      <h1>{t('h1overview')}</h1>
      <CreateListModal onCreateList={handleCreateList} toggleModal={toggleModal} isModalOpen={isModalOpen} user={currentUser} />
      <ul>
      {shoppingLists
  .filter((list) => (showArchived ? true : !list.isArchived))
  .map((list) => {
    console.log(list);
    return (
      <li key={list.id} className='listShoppingList'>
        <ShoppingListThumbnail 
          list={list}
          user={currentUser}
          onDeleteList={handleDeleteList}
          onArchiveList={handleArchiveList}
          isArchived={list && list.isArchived}
        />
      </li>
    );
  })}


      </ul>
      <div className="chart-container">
      <h2>{t('chartTitle')}</h2>
      {chartData.length > 0 ? (
        <div>
 
  <BarChart width={300} height={400} data={chartData}>
  <XAxis dataKey="name" tick={{ opacity: 0 }} />
  <YAxis
    type="number"
    domain={[0, 'auto']}
    tickCount={maxDataValue + 1}
    tickFormatter={(value) => Math.round(value)}
  />
  <Tooltip />
  <Legend />
  <Bar
    dataKey="itemCount"
    fill="#8884d8"
    name={t('itemCount')}
    shape={(props) => {
      const { payload, x, y, width, height } = props;
      if (payload.itemCount === 0) {
        return <rect x={x} y={y - 5} width={width} height={height + 5} fill="#8884d8" />;
      }
      return <rect x={x} y={y} width={width} height={height} fill="#8884d8" />;
    }}
  />
</BarChart>
</div>
  ) : (
    <p>{t('noDataAvailable')}</p>
  )}
</div>

    </div>
  );
};

export default ShoppingListOverview;
