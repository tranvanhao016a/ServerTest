import { Module } from '@nestjs/common';
import { CousreService } from './cousre.service';
import { CousreController } from './cousre.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CousreSchema } from './entities/cousre.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cousre', schema: CousreSchema }]),

  MongooseModule.forFeature([{ name: 'Profile', schema: CousreSchema }])


  ],
  controllers: [CousreController],
  providers: [CousreService],
  exports: [CousreService],
})
export class CousreModule { }
