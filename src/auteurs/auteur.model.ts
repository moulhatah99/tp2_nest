import * as mongoose from 'mongoose';

export const AuteurSchema = new mongoose.Schema({
  nom: String,
});

export interface Auteur {
  nom: string;
}
