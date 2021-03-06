import { Component } from '@angular/core';
import {ConfigService} from './config/config.service';
import {jsonpFactory} from '@angular/http/src/http_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iTunes Music Searcher!';
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
