import { Body, Controller, Get, HttpCode, Param, Post, Res, ResponseDecoratorOptions } from '@nestjs/common';
import { Response } from 'express';

@Controller('courses')
export class CoursesController {

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
    findOne(@Param('id') id: string) {
        return `Curso com ID ${id}`
    }


    @Post()
    create(@Body() body) {
        return body
    }


}
