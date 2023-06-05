import axios from 'axios';

export const SERVER_URL = 'http://localhost:3000'
console.log('SERVER_URL:', SERVER_URL);

async function Round() {

  function rollDice() {
    const numDice = 2;
    const numSides = 6;
    const results = [];
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * numSides) + 1;
      results.push(roll);
    }
    return results;
  };

  function randomAnswer() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    return randomNumber;
  };

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

  console.log("A continuación se simula una ronda del juego:");

  let { id: gameId, round: gameRound, finished: gameFinished } = await getGame();
  console.log("Estamos en la ronda " + gameRound + " del juego");
  let { id: playerId, position: playerPosition, turn: playerTurn } = await getPlayer(gameId);
  // ERROR AL RECIBIR JUGADOR POR LO QUE LO DEFINIMOS
  playerId = 3;
  playerPosition = 0;
  playerTurn = 1;
  playerId = parseInt(playerId, 10);
  gameRound = parseInt(gameRound, 10);
  console.log("Ahora es el turno del jugador " + playerId);
  console.log("Este jugador está en la casilla " + playerPosition);
  const diceResult = rollDice().reduce((a, b) => a + b, 0);
  console.log("El jugador lanza los dados y obtiene " + diceResult);
  playerPosition += diceResult;
  console.log("El jugador avanza a la casilla " + playerPosition);
  const categories = await getCategories();
  const categoryId = (playerPosition % categories.length) + 1;
  console.log(categoryId)
  const categoryName = getCategoryById(categories,categoryId);
  console.log("El jugador cae en la categoría " + categoryName);
  const {
    id: cardId,
    question: cardQuestion,
    option_1: firstAlternative,
    option_2: secondAlternative,
    option_3: thirdAlternative,
    option_4: fourthAlternative,
    correct: cardAnswer,
  } = await getCard(categoryId);
  console.log("La pregunta es: " + cardQuestion);
  console.log("a) " + firstAlternative);
  console.log("b) " + secondAlternative);
  console.log("c) " + thirdAlternative);
  console.log("d) " + fourthAlternative);
  await updateCard(cardId);
  const playerAnswer = randomAnswer();
  if (playerAnswer === parseInt(cardAnswer)) {
    console.log("La respuesta del jugador es correcta");
  } else {
    console.log("La respuesta del jugador es incorrecta");
    playerTurn = 0;
    //await updatePlayer((playerId + 1) % 4, null, 1);
  }
  //await updatePlayer(playerId, playerPosition, playerTurn);
  await updateGame(gameId);
   console.log("Finalizamos una ronda");
};

//let round = Round();

export default Round;