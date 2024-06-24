import { Module } from '@nestjs/common';
import { UserServiceController } from './user-service.controller';
import { UserServiceService } from './user-service.service';
import { IamModule } from './iam/iam.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.USER_DB_HOST,
      port: +process.env.USER_DB_PORT,
      username: process.env.USER_DB_USER,
      password: process.env.USER_DB_PASS,
      database: process.env.USER_DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    IamModule
  ],
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}
