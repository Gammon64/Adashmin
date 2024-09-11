import { Funcionario } from '../entities/funcionario.entity';

export const funcionarioStub = (): Funcionario => ({
  nome: 'Tom',
  cargo: 'Desenvolvedor',
  departamento: 'TI',
  dataAdmissao: new Date('2021-01-01'),
});
