import {randomNumber} from '../utils/random';

const users = [
  {
    username: 'user1',
    password: 'password1',
  },
  {
    username: 'user2',
    password: 'password2',
  },
];

export const signIn = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        u => u.username === username && u.password === password,
      );
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, randomNumber(500, 4000));
  });
};
