// src/livres/livres.model.ts
import * as mongoose from 'mongoose';

export const LivreSchema = new mongoose.Schema({
  titre: String,
  auteur: String,
});

export interface Livre {
  titre: string;
  auteur: string;
}
