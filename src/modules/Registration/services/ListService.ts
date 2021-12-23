import { getCustomRepository } from 'typeorm';

import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationDb';
import { EpiceDbRepository } from '@modules/Registration/typeorm/repositories/EpiceDbRepository';

export default class ListService {
  public async execute(): Promise<RegistionPoint[]> {
    // eslint-disable-next-line
    const epiceRepository = getCustomRepository(
      EpiceDbRepository,
    );
    return await epiceRepository.find();
  }
}
