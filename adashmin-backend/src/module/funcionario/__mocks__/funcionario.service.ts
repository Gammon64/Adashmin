import { funcionarioStub } from '../stubs/funcionario.stub';

export const FuncionarioService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(funcionarioStub()),
  findAll: jest.fn().mockResolvedValue([funcionarioStub()]),
  findOne: jest.fn().mockResolvedValue(funcionarioStub()),
  update: jest.fn().mockResolvedValue(funcionarioStub()),
  remove: jest.fn().mockResolvedValue(funcionarioStub()),
});
