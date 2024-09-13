import { Injectable } from '@nestjs/common';
import { FuncionarioDto } from './dto/funcionario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Funcionario } from './entities/funcionario.entity';
import { Model } from 'mongoose';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectModel(Funcionario.name)
    private readonly funcionarioModel: Model<Funcionario>,
  ) {}

  create(createFuncionarioDto: FuncionarioDto) {
    return this.funcionarioModel.create(createFuncionarioDto);
  }

  findAll(query?: string) {
    // Busca se contém o texto em nome, cargo ou departamento.
    const filter = {
      $or: [
        { nome: { $regex: query, $options: 'i' } },
        { cargo: { $regex: query, $options: 'i' } },
        { departamento: { $regex: query, $options: 'i' } },
      ],
    };
    // Se query não for indefinida, aplico o filtro, se não, retorno todos os funcionários
    return this.funcionarioModel.find(query ? filter : {});
  }

  findOne(id: string) {
    return this.funcionarioModel.findById(id);
  }

  update(id: string, updateFuncionarioDto: FuncionarioDto) {
    return this.funcionarioModel.findByIdAndUpdate(id, updateFuncionarioDto);
  }

  remove(id: string) {
    return this.funcionarioModel.findByIdAndDelete(id);
  }
}
