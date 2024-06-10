import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Region) private readonly regionRepository: Repository<Region>,
  ) {}

  async create(createRegionDto: CreateRegionDto) {
    try {
      const region = await this.regionRepository.create({
        ...createRegionDto
      });

      await this.regionRepository.save(region);

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Region added successfully',
        data: region
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const regions = await this.regionRepository.find();

      if (regions.length < 1) {
        throw new HttpException('No region found', HttpStatus.NO_CONTENT);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Regions retrieved successfully',
        data: regions
      }
    } catch (error) {
      if (error.status === HttpStatus.NO_CONTENT) {
        throw new HttpException(error.message, HttpStatus.NO_CONTENT);
      }
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    try {
      const region = await this.regionRepository.findOneBy({ id });

      if (!region) {
        throw new NotFoundException('Region not found');
      }

      await this.regionRepository.update(id, updateRegionDto);

      return {
        statusCode: HttpStatus.OK,
        message: 'Region updated successfully',
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const region = this.regionRepository.findOneBy({ id });

      if (!region) {
        throw new NotFoundException('Region not found');
      }

      await this.regionRepository.delete(id);

      return {
        statusCode: HttpStatus.OK,
        message: 'Region deleted successfully',
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }
}
