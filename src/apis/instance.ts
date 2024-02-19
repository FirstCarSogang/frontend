import axios from 'axios';

const REFRESH_URL = '/refresh';

export const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    let token: string | null = null;
    if (config.url !== REFRESH_URL) {
      token = localStorage.getItem('accessToken');
    } else {
      token = localStorage.getItem('refreshToken');
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const getRefreshToken = async (): Promise<string | void> => {
  try {
    const {
      data: { accessToken, refreshToken },
    } = await axios.get<{ accessToken: string; refreshToken: string | null }>(
      REFRESH_URL,
    );

    localStorage.setItem('accessToken', accessToken);

    if (refreshToken !== null) {
      localStorage.setItem('refreshToken', refreshToken);
    }

    return accessToken;
  } catch (e) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
};

axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    if (config.url === REFRESH_URL || status !== 401 || config.sent) {
      return Promise.reject(err);
    }

    config.sent = true;
    const accessToken = await getRefreshToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return axios(config);
  },
);

export const noAuthInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
