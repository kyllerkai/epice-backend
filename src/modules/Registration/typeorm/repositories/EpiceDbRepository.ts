import { EntityRepository, Repository } from 'typeorm';

import EpiceDb from '@modules/Registration/typeorm/models/RegistrationDb';

@EntityRepository(EpiceDb)
export class EpiceDbRepository extends Repository<EpiceDb> {}
