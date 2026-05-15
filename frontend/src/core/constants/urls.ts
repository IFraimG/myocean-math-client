
export const SERVER_URLS = {
  FILES_URL: `${import.meta.env.VITE_SERVER_URL}/files`,
  URL_USER_CREATE: `${import.meta.env.VITE_SERVER_URL}/auth/create`,
  URL_USER_LOGIN: `${import.meta.env.VITE_SERVER_URL}/auth/login`,
  URL_USER_AUTH_CHECK: `${import.meta.env.VITE_SERVER_URL}/auth/check`,
  URL_USER_FULL_DATA: `${import.meta.env.VITE_SERVER_URL}/users/id`,
  URL_USER_FINISHED: `${import.meta.env.VITE_SERVER_URL}/users/finished`,
  URL_USER_SAVE: `${import.meta.env.VITE_SERVER_URL}/users/save`,
  URL_GET_TASKS_LEVEL: `${import.meta.env.VITE_SERVER_URL}/tasks/level`,
} as const