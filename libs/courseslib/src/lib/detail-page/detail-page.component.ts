import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Course} from '@course-inc/data';

@Component({
  selector: 'course-inc-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  id:number;
  course:Course;
  constructor( private route: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
  fetch(){
    this.http.get<Course>('/api/course/${this.id}').subscribe((result)=>(this.course=result));
  }
}
