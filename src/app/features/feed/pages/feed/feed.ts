import { Component } from '@angular/core';
import { CreatePost } from '../../components/create-post/create-post';

@Component({
  selector: 'app-feed',
  imports: [CreatePost],
  templateUrl: './feed.html',
  styleUrl: './feed.scss',
})
export class Feed { }
