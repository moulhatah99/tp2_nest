// src/livres/livres.service.ts
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Livre } from './livres.model';

@Injectable()
export class LivresService {
  constructor(@InjectModel('Livre') private readonly livreModel: Model<Livre>) {}

  async findAll(): Promise<Livre[]> {
    return await this.livreModel.find().exec();
  }

  async findOne(id: string): Promise<Livre> {
    return await this.livreModel.findById(id).exec();
  }

  async create(createDto: any): Promise<Livre> {
    const createdLivre = new this.livreModel(createDto);
    return await createdLivre.save();
  }

  async update(id: string, updateDto: any): Promise<Livre> {
    return await this.livreModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Livre> {
    return await this.livreModel.findByIdAndRemove(id).exec();
  }
}
