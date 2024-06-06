import { Injectable } from '@nestjs/common';

import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
    private course: Course[] = [{
        id: 1,
        name: "NestJs",
        description: "Curso sobre os fundamentos do framework NestJs",
        tags: ['node.js','nest.js', 'javascript', 'typescript']
    }]
}
