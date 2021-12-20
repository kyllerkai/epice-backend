import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationPoint';
import { EpiceDbRepository } from '@modules/Registration/typeorm/repositories/EpiceDbRepository';

interface IRequest {
  nome: string;
  email: string;
  curso: string;
}

export default class RegistrationPointService {
  public async execute({
    nome,
    curso,
    email,
  }: IRequest): Promise<RegistionPoint> {
    const epiceDbRepository = getCustomRepository(
      EpiceDbRepository,
    );

    const create = await epiceDbRepository.create({
      nome,
      curso,
      email,
    });

    const findPoins = await epiceDbRepository.find();

    for (let i = 0; i < findPoins.length; i++) {
      if (findPoins[i].email) {
        throw new AppError(
          `Email já cadastrado`,
        );
      }
    }

    return await epiceDbRepository.save(create);
  }
}
