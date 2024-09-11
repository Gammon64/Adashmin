import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Funcionario {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  cargo: string;

  @Prop({ required: true })
  departamento: string;

  @Prop({ required: true })
  dataAdmissao: Date;
}

export const FuncionarioSchema = SchemaFactory.createForClass(Funcionario);
