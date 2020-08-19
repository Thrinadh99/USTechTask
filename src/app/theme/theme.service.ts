import { Injectable } from "@angular/core";
import { Theme, light, dark, blue, red } from "./theme";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark, blue, red];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setBlueTheme(): void {
    this.setActiveTheme(blue);
  }

  setRedTheme(): void {
    this.setActiveTheme(red);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}