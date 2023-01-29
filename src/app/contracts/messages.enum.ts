export enum AppMessage {
  ROOT_API_MESSAGE = 'API is running',

  INVALID_CREDENTIALS = 'Invalid credentials',
  USERNAME_ALREADY_EXISTS = 'Username already exists',
  EMAIL_ALREADY_EXISTS = 'Email already exists',
  AUTHENTICATED_USER = 'Authenticated user',
  REGISTER_SUCCESS = 'Register success',
  LOGOUT_SUCCESS = 'Logout success',
  LOGIN_SUCCESS = 'Login success',
  TOKEN_REFRESH = 'New token generated using refresh token',
}
