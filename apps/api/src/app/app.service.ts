import { Injectable } from '@nestjs/common';
import { Course } from '@course-inc/data';

@Injectable()
export class AppService {
  courses: Course[]=[
    {id:1,name: "Python Basics",coursefee:100,hours:20},
    {id:2,name: "Python for Machine Learning",coursefee:100,hours:1},
    {id:3,name: "Python for DevOps",coursefee:100,hours:3}
  ];
  course:Course;
  getData(): Course[] {
    return this.courses;
  }
  search(id:number):Course{
    this.course = this.courses.find(x=>x.id==id);
    return this.course;
  }
}



