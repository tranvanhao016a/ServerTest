import { Test, TestingModule } from '@nestjs/testing';
import { CousreService } from './cousre.service';

describe('CousreService', () => {
  let service: CousreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CousreService],
    }).compile();

    service = module.get<CousreService>(CousreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
