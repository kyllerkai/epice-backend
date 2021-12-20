import { getCustomRepository } from 'typeorm';

import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationPoint';
import { EpiceDbRepository } from '@modules/Registration/typeorm/repositories/EpiceDbRepository';

export default class ListService {
  public async execute(): Promise<RegistionPoint[]> {
    const epiceRepository = getCustomRepository(
      EpiceDbRepository,
    );

    return await epiceRepository.find();
  }
}
