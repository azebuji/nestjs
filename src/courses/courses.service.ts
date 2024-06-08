import { Injectable } from '@nestjs/common';

import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [{
        id: 1,
        name: "NestJs",
        description: "Curso sobre os fundamentos do framework NestJs",
        tags: ['node.js', 'nest.js', 'javascript', 'typescript']
    }]


    findAll() {
        return this.courses
    }

    findOne(id: number) {
        return this.courses.find(course => course.id === id)
    }

    create(createCourseDTO: any) {
        this.courses.push(createCourseDTO)
    }

    put(id: number, course: any) {
        const existCourse = this.findOne(id);
        if (existCourse) {
            const index = this.courses.findIndex(course => course.id === existCourse.id);
            this.courses[index] = { id, ...course }
        }
    }

    remove(id) {
        const index = this.courses.findIndex(course => course.id === id);
        if (index >= 0) {
            this.courses.splice(index, 1);
        }


    }
}
