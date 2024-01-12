import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Auteur } from './auteur.model';

@Injectable()
export class AuteursService {
  constructor(@InjectModel('Auteur') private readonly auteurModel: Model<Auteur>) {}

  async findAll(): Promise<Auteur[]> {
    return await this.auteurModel.find().exec();
  }

  async findOne(id: string): Promise<Auteur> {
    return await this.auteurModel.findById(id).exec();
  }

  async create(createDto: any): Promise<Auteur> {
    const createdAuteur = new this.auteurModel(createDto);
    return await createdAuteur.save();
  }

  async update(id: string, updateDto: any): Promise<Auteur> {
    return await this.auteurModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Auteur> {
    return await this.auteurModel.findByIdAndRemove(id).exec();
  }
}
