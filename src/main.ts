import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import validationOptions from './app/utils/validation-options';
import * as cowsay from 'cowsay';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.setGlobalPrefix(config.get('app.prefix'), {
    exclude: ['/'],
  });

  /**
   * Validation Pipe for formatting validation error
   */
  app.useGlobalPipes(new ValidationPipe(validationOptions));

  /**
   * Enable cookie parser
   */
  app.use(cookieParser());

  /**
   * Enable cors
   */
  app.enableCors({
    origin: true,
    credentials: true,
  });

  /**
   * boot the app porting the config.port
   */
  const port = config.get('app.port');
  await app.listen(port);

  /**
   * Print the application name and environment.
   */
  const appUrl = config.get('app.url');
  console.log(appUrl);
  const docSuffix = config.get('app.doc');

  const say = cowsay.say({
    text: `App is running at ${appUrl} | Doc: ${appUrl}/${docSuffix}`,
  });
  console.log(say);
}
bootstrap();
