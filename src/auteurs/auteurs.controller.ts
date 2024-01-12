import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AuteursService } from './auteurs.service';

@Controller('auteurs')
export class AuteursController {
  constructor(private readonly auteursService: AuteursService) {}

  @Get()
  findAll() {
    return this.auteursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string
