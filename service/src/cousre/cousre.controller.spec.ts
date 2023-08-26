import { Test, TestingModule } from '@nestjs/testing';
import { CousreController } from './cousre.controller';
import { CousreService } from './cousre.service';

describe('CousreController', () => {
  let controller: CousreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CousreController],
      providers: [CousreService],
    }).compile();

    controller = module.get<CousreController>(CousreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
