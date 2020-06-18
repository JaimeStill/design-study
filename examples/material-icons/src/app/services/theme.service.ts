import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable()
export class ThemeService {
  isLight = true;
  toggleTheme = () => {
    this.isLight = !this.isLight;
    this.setOverlayContainerTheme();
  }

  constructor(
    private iconRegistry: MatIconRegistry,
    private overlay: OverlayContainer
  ) {
    this.setOverlayContainerTheme();
  }

  setOverlayContainerTheme = () => {
    if (this.isLight) {
      this.overlay.getContainerElement().classList.remove('app-dark');
      this.overlay.getContainerElement().classList.add('app-light');
    } else {
      this.overlay.getContainerElement().classList.remove('app-light');
      this.overlay.getContainerElement().classList.add('app-dark');
    }
  }

  registerFonts = () => {
    this.iconRegistry.registerFontClassAlias('material-icons-outlined');
    this.iconRegistry.registerFontClassAlias('material-icons-round');
    this.iconRegistry.registerFontClassAlias('material-icons-sharp');
    this.iconRegistry.registerFontClassAlias('material-icons-two-tone');
  }
}
