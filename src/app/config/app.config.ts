import { registerAs } from '@nestjs/config';
export default registerAs('app', () => ({
  name: process.env.APP_NAME || 'Test Api',
  description: process.env.APP_DESC || 'Safewheel API description',
  version: process.env.APP_VERSION || '1.0.0',
  port: process.env.PORT || 4000,
  JWT_ACCESS_TOKEN_SECRET : 'qwertyuiop',
  JWT_REFRESH_TOKEN_SECRET : 'asdfghjkl',

  /*
  |--------------------------------------------------------------------------
  | Api Prefix
  |--------------------------------------------------------------------------
  | This value determines the prefix of the API.
  | Set this in your ".env" file.
  | If not set, the default value is "api".
  */
  prefix: process.env.APP_PREFIX || 'api',
  /*
    |--------------------------------------------------------------------------
    | Application Documentation Url suffix (e.g. /docs)
    |--------------------------------------------------------------------------
    | This value determines the suffix of the API documentation url.
    | Set this in your ".env" file.
    | If not set, the default value is "docs".
    */
  doc: process.env.APP_DOC || 'docs',

  /*
    |--------------------------------------------------------------------------
    | Application URL
    |--------------------------------------------------------------------------
    | This value determines the url that the application will run on.
    | Set this in your ".env" file.
    | If not set, the default value is http://localhost:4000.
    */
  url: process.env.BACKEND_DOMAIN || 'http://localhost:4000',
}));
