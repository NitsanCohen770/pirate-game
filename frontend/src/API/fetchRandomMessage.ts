import axios from 'axios';

export async function fetchRandomMessage() {
  const { data } = await axios.get('https://localhost:3001/messages');
  return data;
}
