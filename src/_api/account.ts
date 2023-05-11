// third-party
import jwt from 'jsonwebtoken';

// project-imports
import users from 'data/account';
import services from 'utils/mockAdapter';

// types
import { JWTDataProps } from 'types/auth';

// constant
const JWT_SECRET = process.env.REACT_APP_JWT_SECRET_KEY as string;
const JWT_EXPIRES_TIME = process.env.REACT_APP_JWT_TIMEOUT;

const delay = (timeout: number) => new Promise((res) => setTimeout(res, timeout));

// ==============================|| JWT ACCOUNT - LOGIN ||============================== //

services.onPost('/api/account/login').reply(async (request) => {
  try {
    await delay(500);

    const { email, password } = JSON.parse(request.data);

    let newUsers = users;
    if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
      const localUsers = window.localStorage.getItem('users');
      newUsers = JSON.parse(localUsers!);
    }

    const user = newUsers.find((_user) => _user.email === email);

    if (!user) {
      return [400, { message: 'Verify Your Email & Password' }];
    }

    if (user.password !== password) {
      return [400, { message: 'Invalid Password' }];
    }

    const serviceToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_TIME });

    return [
      200,
      {
        serviceToken,
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      }
    ];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Server Error' }];
  }
});

// ==============================|| JWT ACCOUNT - REGISTER ||============================== //

services.onPost('/api/account/register').reply(async (request) => {
  try {
    await delay(500);

    const { id, email, password, firstName, lastName } = JSON.parse(request.data);

    if (!email || !password) {
      return [400, { message: 'Enter Your Email & Password' }];
    }

    if (!firstName || !lastName) {
      return [400, { message: 'Enter Your Name' }];
    }

    const result = users.push({
      id,
      email,
      password,
      name: `${firstName} ${lastName}`
    });

    return [200, { users: result }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Server Error' }];
  }
});

// ==============================|| JWT ACCOUNT - GET ||============================== //

services.onGet('/api/account/me').reply((request) => {
  try {
    const { Authorization } = request.headers!;

    if (!Authorization) {
      return [401, { message: 'Token Missing' }];
    }

    let newUsers = users;
    if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
      const localUsers = window.localStorage.getItem('users');
      newUsers = JSON.parse(localUsers!);
    }

    const serviceToken = Authorization!.toString().replace('Bearer ', '');
    const jwData = jwt.verify(serviceToken, JWT_SECRET);

    const { userId } = jwData as JWTDataProps;
    const user = newUsers.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: 'Invalid Token' }];
    }

    return [
      200,
      {
        user: {
          id: user.id,
          email: user.email
        }
      }
    ];
  } catch (err) {
    return [500, { message: 'Server Error' }];
  }
});
