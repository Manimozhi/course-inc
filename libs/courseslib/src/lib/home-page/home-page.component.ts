import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import {Course} from '@course-inc/data';

@Component({
  selector: 'course-inc-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public courses: Course[];
  dsource: LocalDataSource;

  constructor(private http:HttpClient){
    this.fetch();
    this.courses=[
      {id:1,name: "Python Basics",coursefee:100,hours:20},
      {id:2,name: "Python for Machine Learning",coursefee:100,hours:1},
      {id:3,name: "Python for DevOps",coursefee:100,hours:3}
    ];
    this.dsource = new LocalDataSource(this.courses);
  }
     
    
  ngOnInit(): void {
  }

  fetch(){
    this.http.get<Course[]>('/api/course').subscribe((result)=>(this.courses=result));
  }
  
  onCustom(event) {
    this.http.get<Course[]>('/api/course/${event.data.id}').subscribe((result)=>(this.courses=result));
    //alert(`Custom event '${event.action}' fired on row №: ${event.data.id}`)
  }
  

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Course Title'
      },
      coursefee: {
        title: 'Course Fee'
      },
      hours: {
        title: 'Hours'
      }
    },
    actions:"none",
    mode:'external'
  };
}

