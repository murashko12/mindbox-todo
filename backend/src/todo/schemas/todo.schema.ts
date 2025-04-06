import { Schema, Document } from 'mongoose'

export const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false }
})

export class Todo extends Document {
  title: string;
  description?: string;
  completed: boolean;
}