import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  async havePosts() {
    return await (await fetch('../../assets/db.json')).json();
  }
}
