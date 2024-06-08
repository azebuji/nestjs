import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, ResponseDecoratorOptions } from '@nestjs/common';
import { Response } from 'express';

import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService) { }

    @Get('list')
    findAll(@Res() response: Response) {
        return response.status(200).json({ name: 'listagem dos cursos' })
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
        return this.coursesService.findOne(Number(id))
    }


    @Post()
    create(@Body() body) {
        return body
    }

    //Patch para atualizar apenas um dado de algum recurso e put pata quando é todo o recurso, isso é apenas uma convenção
    @Patch(':id')
    update(@Param('id') id, @Body() body) {
        console.log(body)
        return `Update course with ID ${id}`
    }


    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    Delete(@Param('id') id) {
        return `Delete course with ID ${id}`
    }


}
