import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Put, Query } from '@nestjs/common';
import { CousreService } from './cousre.service';
import { CreateCousreDto } from './dto/create-cousre.dto';
import { UpdateCousreDto } from './dto/update-cousre.dto';

@Controller('v1/cousre')
export class CousreController {
  constructor(private readonly cousreService: CousreService) { }
  @Post()
  async create(@Body() createCousreDto: CreateCousreDto) {
    // const requiredFields =
    //   [
    //     'name',
    //     'description',
    //     'price',
    //     'lessons',
    //     'students'];
    // const missingFields = requiredFields.filter(
    //   (field) => !createCousreDto[field],
    // );
    // if (missingFields.length > 0) {
    //   throw new HttpException(
    //     `Missing required fields: ${missingFields.join(', ')}`,
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    try {
      const cousre = await this.cousreService.create(createCousreDto);
      return cousre;
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const cousre = await this.cousreService.findOne(id);
      if (!cousre) {
        throw new HttpException('Course not found', HttpStatus.BAD_REQUEST);
      }
      return cousre;
    } catch (error) {
      throw error;
    }
  }
  @Get()
  async findAll() {
    try {
      const cousres = await this.cousreService.findAll();
      return cousres;
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCousreDto: UpdateCousreDto) {
    try {
      const cousre = await this.cousreService.update(id, updateCousreDto);
      return cousre;
    } catch (error) {
      throw error;
    }
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const cousre = await this.cousreService.remove(id);
      return cousre;
    } catch (error) {
      throw error;
    }
  }
  @Put(':id/enroll')
  async enroll(@Param('id') id: string, @Query('uid') uid: string) {
    try {
      const cousre = await this.cousreService.buycousre(id, uid);
      return cousre;
    } catch (error) {
      throw error;
    }
  }

  // @Get(':uid/students')
  // async getStudents(@Param('uid') uid: string) {
  //   try {
  //     const cousres = await this.cousreService.getEnrolledCourses(uid);
  //     return cousres;
  //   } catch (error) {
  //     throw error;
  //   }
  // }


}
