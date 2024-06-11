import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';

import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService) { }

    @Get('list')
    findAll() {
        return this.coursesService.findAll()
    }

    /*
     Exemplo de como passar 2 ou mais parâmetros via Params na rota como rota/parametro1/paramtro2/etc...
    @Get(':id/:name')
     findOne(@Param('id') id: string, @Param('name') name: number) {
 
         console.log(typeof name)
 
         return `Curso com ID ${id} e o name ${name}`
 
     }*/

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.coursesService.findOne(+id);
    }


    @Post()
    create(@Body() body) {
        return this.coursesService.create(body);
    }

    //Patch para atualizar apenas um dado de algum recurso e put pata quando é todo o recurso, isso é apenas uma convenção
    @Put(':id')
    update(@Param('id') id: number, @Body() body) {
        return this.coursesService.update(+id, body);
    }


    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    Delete(@Param('id') id: number) {
        return this.coursesService.remove(+id)
    }


}
