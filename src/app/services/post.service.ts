import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angfirstore: AngularFirestore) { }

  featuredloadData() {
    return this.angfirstore.collection('posts', ref => ref.where( 'isFeatured','==',true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  loadLatestPost() {
    return this.angfirstore.collection('posts', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  singleCategoryData(categoryId) {
    return this.angfirstore.collection('posts', ref => ref.where( 'category.categoryId','==',categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }
  singlePostData(postId) {
    return this.angfirstore.doc(`posts/${postId}`).valueChanges();
  }

  similarCategoryPost(categoryId) {
    return this.angfirstore.collection('posts', ref => ref.where( 'category.categoryId','==',categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }
}
