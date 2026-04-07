import { FileModule } from './file.module'
import { TasksModule } from './tasks.module'
import { AuthModule } from './auth.module'
import { UsersModule } from './users.module'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import * as dotenv from 'dotenv'

dotenv.config()
@Module({
  imports: [
    UsersModule,
    AuthModule,
    TasksModule,
    FileModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@myoceanmath.0jplqki.mongodb.net/?appName=myoceanmath`,
    ),
  ],
})
export class AppModule {}
