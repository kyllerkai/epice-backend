import RegistionPoint from '../modules/Registration/typeorm/models/RegistrationDb';

export default {
  // eslint-disable-next-line
  render(registionPoint: RegistionPoint) {
    return {
      id: registionPoint.id,
      namePoint: registionPoint.nome,
      latitude: registionPoint.email,
      longitude: registionPoint.curso,
    };
  },
};
