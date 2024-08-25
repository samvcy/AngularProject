import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../model/post';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit{

  //postArray :Record<any, Object> = {};

  @Input() postData: any
  //Post = {
  //   data: {},
  //   title: '',
  //   permalink: '',
  //   category: {
  //     categoryId: '',
  //     category: ''
  //   },
  //   postImgPath: '',
  //   excerpt: '',
  //   content: '',
  //   isFeatured: false,
  //   views: 0,
  //   status: '',
  //   createdAt: undefined
 // };

  constructor(){}

  ngOnInit(): void {
   console.log(this.postData)
  }


}
