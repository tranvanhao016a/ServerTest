import { PartialType } from '@nestjs/mapped-types';
import { CreateCousreDto } from './create-cousre.dto';

export class UpdateCousreDto extends PartialType(CreateCousreDto) {}
