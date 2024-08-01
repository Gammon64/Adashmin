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

  findAll() {
    return this.funcionarioModel.find();
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
