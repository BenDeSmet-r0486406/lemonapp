import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../config/config.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {
  itle = 'iTunes Music Searcher!';
  inputValue = 'Please type in a filter...';
  configService: any;
  songs : any[];

  constructor( configService: ConfigService) {
    this.configService = configService;
  }

  onSearchChange(searchValue : string ) {
    this.inputValue = "searching...";
    this.configService.getConfig(searchValue).subscribe(data => {
      let jsonData = data._body;
      let jsonObject = JSON.parse(jsonData);
      this.songs = jsonObject.results
      console.log(this.songs);
      this.inputValue = " ";
    });
  }
}
