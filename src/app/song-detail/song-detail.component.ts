import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router,} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ConfigService} from '../config/config.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  id : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private service: ConfigService
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.id =  this.route.snapshot.params['id'];
  }

}
