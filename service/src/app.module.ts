import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { CousreModule } from './cousre/cousre.module';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hao123456:hao123456@cluster0.wfdvc37.mongodb.net/',
    ),
    AuthModule,
    UserModule,
    ProfileModule,
    CousreModule,
    LessonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
