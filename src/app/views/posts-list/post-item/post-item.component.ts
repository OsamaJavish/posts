import {Component, Input, OnInit} from '@angular/core';
import {FadeIn, Post} from '../../../core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  animations: [FadeIn]
})
export class PostItemComponent implements OnInit {

  @Input('post') post: Post;

  isShowId = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
