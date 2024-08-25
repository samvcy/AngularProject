import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit{

  singlePost :any;
  similarPostData :any =[];

constructor(private router: ActivatedRoute,private postService :PostService){}

  ngOnInit(): void {
    this.router.params.subscribe(val => {
    this.postService.countViews(val.id)
     this.postService.singlePostData(val.id).subscribe(post =>{
       this.singlePost = post
       this.similarPost(this.singlePost.category.categoryId)
       //console.log(post)
      })
    })
  }

  similarPost(categoryId){
    this.postService.similarCategoryPost(categoryId).subscribe(val =>{
      this.similarPostData = val;
      })
  }

}
