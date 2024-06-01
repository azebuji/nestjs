import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get('list')
    findAll() {
        return 'Listagem de cursos'
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

}
