import { FileService } from './../services/file.service'
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Res,
} from '@nestjs/common'
import * as fs from 'fs'
import path from 'path'

@Controller('/files')
export class FilesController {
  constructor(private fileService: FileService) {}

  @Get('/tasks/:filename')
  async getImage(@Param('filename') filename: string, @Res() res: any) {
    const filePath = path.join(process.cwd(), 'tasks', filename)
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath)
    } else {
      throw new HttpException('Изображение не найдено', HttpStatus.NOT_FOUND)
    }
  }
}
