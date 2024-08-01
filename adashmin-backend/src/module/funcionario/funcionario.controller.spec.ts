import { Test, TestingModule } from '@nestjs/testing';
import { FuncionarioController } from './funcionario.controller';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './entities/funcionario.entity';
import { funcionarioStub } from './stubs/funcionario.stub';
import { FuncionarioDto } from './dto/funcionario.dto';

jest.mock('./funcionario.service');

describe('FuncionarioController', () => {
  let controller: FuncionarioController;
  let service: FuncionarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FuncionarioController],
      providers: [FuncionarioService],
    }).compile();

    controller = module.get<FuncionarioController>(FuncionarioController);
    service = module.get<FuncionarioService>(FuncionarioService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    let funcionario: Funcionario;
    let funcionarioDto: FuncionarioDto;

    beforeEach(async () => {
      funcionarioDto = {
        nome: funcionarioStub().nome,
        cargo: funcionarioStub().cargo,
        departamento: funcionarioStub().departamento,
        dataAdmissao: funcionarioStub().dataAdmissao,
      };
      funcionario = await controller.create(funcionarioDto);
    });

    test('should call service.create', () => {
      expect(service.create).toHaveBeenCalledWith(funcionarioDto);
    });

    test('should return funcionario', () => {
      expect(funcionario).toEqual(funcionarioStub());
    });
  });

  describe('findAll', () => {
    let funcionarios: Funcionario[];

    beforeEach(async () => {
      funcionarios = await controller.findAll();
    });

    test('should call service.findAll', () => {
      expect(service.findAll).toHaveBeenCalled();
    });

    test('should return funcionarios', () => {
      expect(funcionarios).toEqual([funcionarioStub()]);
    });
  });

  describe('findOne', () => {
    let funcionario: Funcionario;

    beforeEach(async () => {
      funcionario = await controller.findOne(funcionarioStub().id);
    });

    test('should call service.findOne', () => {
      expect(service.findOne).toHaveBeenCalledWith(funcionarioStub().id);
    });

    test('should return funcionario', () => {
      expect(funcionario).toEqual(funcionarioStub());
    });
  });

  describe('update', () => {
    let funcionario: Funcionario;
    let funcionarioDto: FuncionarioDto;

    beforeEach(async () => {
      funcionarioDto = {
        nome: funcionarioStub().nome,
        cargo: funcionarioStub().cargo,
        departamento: funcionarioStub().departamento,
        dataAdmissao: funcionarioStub().dataAdmissao,
      };
      funcionario = await controller.update(
        funcionarioStub().id,
        funcionarioDto,
      );
    });

    test('should call service.update', () => {
      expect(service.update).toHaveBeenCalledWith(
        funcionarioStub().id,
        funcionarioDto,
      );
    });

    test('should return funcionario', () => {
      expect(funcionario).toEqual(funcionarioStub());
    });
  });

  describe('remove', () => {
    let funcionario: Funcionario;

    beforeEach(async () => {
      funcionario = await controller.remove(funcionarioStub().id);
    });

    test('should call service.remove', () => {
      expect(service.remove).toHaveBeenCalledWith(funcionarioStub().id);
    });

    test('should return funcionario', () => {
      expect(funcionario).toEqual(funcionarioStub());
    });
  });
});
