import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000'
console.log('SERVER_URL:', SERVER_URL);

async function Comunications() {

  function getCategoryById(data,id) {
    const item = data.find(obj => obj.id === id);
    return item ? item.name : null;
  }

  const getGame = async () => {
    const url = `${SERVER_URL}/games`;
    const response = await axios.get(url);
    return response.data;
  };

  const getPlayer = async (gameId) => {
    try {
      const url = `${SERVER_URL}/players/${gameId}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error getting player:', error);
      throw error;
    }
  };

  const getCard = async (categoryId) => {
    const url = `${SERVER_URL}/cards/${categoryId}`;
    const response = await axios.get(url);
    return response.data;
  };

  const getCategories = async () => {
    const url = `${SERVER_URL}/categories`;
    const response = await axios.get(url);
    return response.data;
  };

  const updateGame = async (gameId) => {
    const url = `${SERVER_URL}/games/${gameId}`;
    try {
      await axios.put(url, {});
    } catch (error) {
      console.error('Error updating game:', error);
      console.log('Error updating game');
    }
  };

  const updatePlayer = async (playerId, playerPosition, playerTurn) => {
    const url = `${SERVER_URL}/players/${playerId}`;
    const body = {
      position: playerPosition,
      turn: playerTurn,
    };
    try {
      await axios.put(url, body);
    } catch (error) {
      console.error('Error updating player:', error);
      console.log('Error updating player');
    }
  };

  const updateCard = async (cardId) => {
    const url = `${SERVER_URL}/cards/${cardId}`;
    try {
      await axios.put(url, {});
    } catch (error) {
      console.error('Error updating card:', error);
      console.log('Error updating card');
    }
  };

  

};

export default Round;