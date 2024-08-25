import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredPostArray: any = [];

  constructor(private postService :PostService){

    this.postService.featuredloadData().subscribe(val => {
      this.featuredPostArray = val;
    })

  } 

  ngOnInit(): void {
    
  }

}
