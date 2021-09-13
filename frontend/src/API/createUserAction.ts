import axios from 'axios';

export async function createUserAction() {
  const res = await axios.post('http://localhost:3001/users', {
    IP: '222.222.222.222',
    action: 'won',
  });
  return res;
}
