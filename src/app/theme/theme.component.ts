import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  lightTheme(){
    this.themeService.setLightTheme();
  }
  darkTheme(){
    this.themeService.setDarkTheme();
  }
  blueTheme(){
    this.themeService.setBlueTheme();
  }
  redTheme(){
    this.themeService.setRedTheme();
  }

}
