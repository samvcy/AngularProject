import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent implements OnInit{

  singlePostArray : any = []
  categoryValue:any;
  constructor(private router: ActivatedRoute,private postService : PostService){}

  ngOnInit(): void {
    this.router.params.subscribe(val =>{
      this.categoryValue = val.category
      this.postService.singleCategoryData(val.id).subscribe(post => {
          this.singlePostArray = post
      })
    })
  }
}
