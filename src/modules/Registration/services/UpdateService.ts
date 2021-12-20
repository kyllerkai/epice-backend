import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationPoint';
import { EpiceDbRepository } from '@modules/Registration/typeorm/repositories/EpiceDbRepository';

interface IRequest {
  id: number;
  nome: string;
  email: string;
  curso: string;
}

export default class UpdateServie {
  public async execute({
    id,
    nome,
    curso,
    email,
  }: IRequest): Promise<RegistionPoint> {
    const registrationRepository = getCustomRepository(
      EpiceDbRepository,
    );

    const point = await registrationRepository.findOne({ where: { id: id } });

    if (!point) {
      throw new AppError('Ponto de registro não encontrado');
    }

    point.nome = nome;
    point.email = email;
    point.curso = curso;

    return await registrationRepository.save(point);
  }
}
