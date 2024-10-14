import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Key } from 'protractor';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('postForm') postForm: NgForm;
  loadedPosts: Post[] = [];
  isLoading= false;
  error= null;
  constructor(private http: HttpClient, private postService: PostService) {}
  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndSTorePosts(postData.title, postData.content).subscribe( responseData => {
      console.log(responseData)
    });
    this.postForm.reset();
  }

  onFetchPosts() {
    // Send Http request
    this.isLoading = true
    this.postService.fetchPosts().subscribe(posts => {
      this.isLoading = false;
      this.loadedPosts = posts
    },
  error => {
    this.isLoading= false;
    console.log(error)
    this.error = error.message
  });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => this.loadedPosts = [])
  }
}
