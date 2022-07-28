import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  // inject prisma service ke user service menggunakan constructor
  constructor(private dbService: PrismaService) {}

  /**
   * service get all data
   * @returns
   */
  async findAll() {
    return await this.dbService.user.findMany();
  }

  /**
   * Service create data
   * @param data
   * @returns
   */
  async createData(data: CreateUserDto) {
    return await this.dbService.user.create({
      data: data,
    });
  }

  /**
   * Service update data
   * @param id
   * @param data
   * @returns
   */
  async updateData(id: number, data: any) {
    return await this.dbService.user.update({
      data,
      where: {
        id,
      },
    });
  }

  /**
   * Service delete data
   * @param id
   * @returns
   */
  async deleteData(id: number) {
    return await this.dbService.user.delete({
      where: {
        id,
      },
    });
  }
}
