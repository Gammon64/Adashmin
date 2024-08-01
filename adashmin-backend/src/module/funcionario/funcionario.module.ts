import { Module } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import forFeatureDb from '../../db/features.db';

@Module({
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
  imports: [MongooseModule.forFeature(forFeatureDb)],
})
export class FuncionarioModule {}
