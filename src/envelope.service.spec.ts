import { Test, TestingModule } from '@nestjs/testing';
import { EnvelopeService } from './envelope.service';

describe(EnvelopeService.name, () => {
  let service: EnvelopeService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvelopeService],
    }).compile();
    service = module.get(EnvelopeService);
  });

  it('should calculate valid number of happy users', () => {
    testSets.forEach(([userCount, envelopeCount, expected]) => {
      expect(service.maxHappyUsers(userCount, envelopeCount)).toBe(expected);
    });
  });
});

const testSets = [
  [1, 4, -1],
  [2, 4, 0],
  [3, 24, 3],
  [1, 1, 0],
  [3, 2, -1],
  [10, 100, 9],
];
