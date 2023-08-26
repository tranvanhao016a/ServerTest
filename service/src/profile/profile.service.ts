import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) { }

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    try {
      const profile = new this.profileModel(createProfileDto);
      return await profile.save();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async findOne(id: string): Promise<Profile> {
    try {
      const profile = await this.profileModel.findOne({ id: id });
      return profile;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    try {
      const updatedProfile = await this.profileModel.findOneAndUpdate(
        { id: id },
        { ...updateProfileDto },
        { new: true },
      );
      return updatedProfile;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async remove(id: string) {
    try {
      const deletedProfile = await this.profileModel.findOneAndDelete({
        id: id,
      });
      return deletedProfile;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  async findAll(): Promise<Profile[]> {
    try {
      return await this.profileModel.find();
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }





}
