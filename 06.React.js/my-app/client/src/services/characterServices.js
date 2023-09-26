import * as request from '../utils/requester';

export const getAllCharacters = async () => {
  try {
    const result = await request.get('/characters');

    return result;
  } catch (error) {
    throw error;
  }
};

export const getCharacterById = async (characterId) => {
  try {
    const result = await request.get(`/characters/${characterId}`);

    return result;
  } catch (error) {
    throw error;
  }
};

export const createCharacter = async (characterObject) => {
  try {
    const result = await request.post('/characters', characterObject);

    return result;
  } catch (error) {
    throw error;
  }
};

export const editCharacter = async (characterId, characterObject) => {
  try {
    const result = await request.put(`/characters/${characterId}`, characterObject);

    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteCharacterById = async (characterId) => {
  try {
    const result = await request.del(`/characters/${characterId}`);

    return result;
  } catch (error) {
    throw error;
  }
};
