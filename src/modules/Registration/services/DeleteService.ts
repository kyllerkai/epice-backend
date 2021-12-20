import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import { EpiceDbRepository } from '@modules/Registration/typeorm/repositories/EpiceDbRepository';

interface IRequest {
  pointId: number;
}

export default class DeleteRegistrationPoinService {
  public async execute({ pointId }: IRequest): Promise<void> {
    const registrationRepository = getCustomRepository(
      EpiceDbRepository,
    );

    const point = await registrationRepository.findOne({
      where: { id: pointId },
    });

    if (!point) {
      throw new AppError('Ponto de registro não encontrado');
    }

    await registrationRepository.remove(point);
  }
}
