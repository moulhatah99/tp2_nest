import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LivresService } from './livres.service';

@Controller('livres')
export class LivresController {
  constructor(private readonly livresService: LivresService) {}

  @Get()
  findAll() {
    return this.livresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livresService.findOne(id);
  }

  @Post()
  create(@Body() createDto: any) {
    return this.livresService.create(createDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.livresService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livresService.remove(id);
  }
}
