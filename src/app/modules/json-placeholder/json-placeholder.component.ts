import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from 'src/app/core/services/json-placeholder.service';
@Component({
  selector: 'app-json-placeholder',
  templateUrl: './json-placeholder.component.html',
  styles: [
  ]
})
export class JsonPlaceholderComponent implements OnInit {
  isFetching: boolean = false;
  posts: any[] = [];

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
  ) { }

  ngOnInit(): void {
  }

  onFetchAllPosts() {
    this.jsonPlaceholderService.fetchAll()
      .subscribe((res) => {
        this.posts = res;
      }, err => {
        console.log(err)
      })
      .add(() => {
        console.info("onFetchAllPosts done")
      })
  }
}
