import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({providedIn: "root"})
export class PostService {
    constructor(private http: HttpClient) {}

    createAndSTorePosts(title: string, content: string) {
        const postData: Post = {title: title, content: content}
        return this.http
        .post(
          "https://ng-app-test-5ed59-default-rtdb.europe-west1.firebasedatabase.app/posts.json", 
          postData
        )
    }
    fetchPosts() {
        return this.http
        .get<{[key: string]:Post}>("https://ng-app-test-5ed59-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
        .pipe(map(responseData => {
          console.log(responseData);
          const postsArray: Post[] = [];
          for( const key in responseData ) {
            if(responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key} )
            }
          }
          return postsArray
        }))
    }
    deletePosts() {
        return this.http.delete("https://ng-app-test-5ed59-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
    }
}