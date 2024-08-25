import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredPostArray: any = [];
  latestPostArray: any = [];

  constructor(private postService :PostService){

  } 

  ngOnInit(): void {
    this.postService.featuredloadData().subscribe(val => {
      this.featuredPostArray = val;
    })

    this.postService.loadLatestPost().subscribe(val => {
      this.latestPostArray = val;
    }) 
  }

}
