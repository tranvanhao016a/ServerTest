import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail } from 'class-validator';
import mongoose, { HydratedDocument } from 'mongoose';

export type CousreDocument = HydratedDocument<Cousre>;

@Schema({ timestamps: true })
export class Cousre {

    @Prop({ required: true, unique: true })
    id: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop({ default: null })
    img: string;

    @Prop()
    price: string;

    // @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }])
    // students: string[];
    @Prop()
    author: string


}

export const CousreSchema = SchemaFactory.createForClass(Cousre);