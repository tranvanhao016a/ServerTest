import { HttpException, Injectable } from '@nestjs/common';
import { CreateCousreDto } from './dto/create-cousre.dto';
import { UpdateCousreDto } from './dto/update-cousre.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cousre } from './entities/cousre.entity';
import * as mongoose from 'mongoose';
import { Profile } from 'src/profile/entities/profile.entity';


@Injectable()
export class CousreService {

  constructor(@InjectModel(Cousre.name) private cousreModel: mongoose.Model<Cousre>,
    @InjectModel(Profile.name) private profileModel: mongoose.Model<Profile>

  ) { }


  async create(createCousreDto: CreateCousreDto): Promise<Cousre> {
    try {
      const createdCousre = new this.cousreModel(createCousreDto);
      return await createdCousre.save();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }


  async findAll(): Promise<Cousre[]> {
    try {
      return await this.cousreModel.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  async findOne(id: string): Promise<Cousre> {
    try {
      return await this.cousreModel.findOne({ id: id });
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  async update(id: string, updateCousreDto: UpdateCousreDto): Promise<Cousre> {
    try {
      const updatedCousre = await this.cousreModel.findOneAndUpdate({ id: id },
        { ...updateCousreDto }, { new: true });
      return updatedCousre;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  async remove(id: string): Promise<Cousre> {
    try {
      const deletedCousre = await this.cousreModel.findOneAndDelete({ id: id });
      return deletedCousre;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async buycousre(id: string, uid: string): Promise<Profile> {
    try {
      const cousre = await this.cousreModel.findOne({ _id: id });
      if (!cousre) {
        throw new HttpException('Course not found', 404);
      }
      const profiles = await this.profileModel.findOneAndUpdate(
        { id: uid },
        { $addToSet: { cousres: id } },
        { new: true });

      console.log(profiles);
      return profiles;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }

  }

  async getEnrolledCourses(uid: string): Promise<Cousre[]> {
    try {
      const cousres = await this.cousreModel.find({ students: uid });
      return cousres;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }


}
