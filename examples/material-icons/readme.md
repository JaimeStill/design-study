# Material Icons

* [Research](#research)
* [Implementation](#implementation)
* [Bugs](#bugs)
* [References](#references)

[![icons-light](https://user-images.githubusercontent.com/14102723/85060352-1c289b00-b173-11ea-97e5-f66ee780be7c.png)](https://user-images.githubusercontent.com/14102723/85060352-1c289b00-b173-11ea-97e5-f66ee780be7c.png)

[![icons-dark](https://user-images.githubusercontent.com/14102723/85060450-4417fe80-b173-11ea-8359-68f56412ccb2.png)](https://user-images.githubusercontent.com/14102723/85060450-4417fe80-b173-11ea-8359-68f56412ccb2.png)

The decision to self-host the [Material Design Icon Fonts](https://material.io/resources/icons) was made as a result of not having access to newer icons. The [material-icons]() package that was used in previous versions of the app stack has become stale, and I want to be able to manage updates to the icons at the moment they are released.

## Research
[Back to Top](#material-icons)

The [Google Material Design Icons](https://github.com/google/material-design-icons) repository is no longer maintained (*it has not officially been archived, but the latest commit as of 18 June 2020 was on 11 January 2018*), and the only current versions of the icons exist in the [Google Fonts API](https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp).

The [Material Design Icons Developers Guide](https://google.github.io/material-design-icons/) outlines steps for using Google Web Fonts as well as Self Hosting. Upon inspecting the [stylesheet](https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp) relevant to all of the icon styles, I am able to capture the latest font via the URL passed to each `@font-face { src: url() }` definition.

## Implementation
[Back to Top](#material-icons)

Upon downloading each font, they are stored in the [assets/fonts](./src/assets/fonts) public directory in the Angular app. Then, the [Google stylesheet](https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp) for the fonts is added to [icons.scss](./src/theme/icons.scss), but modified to point to the fonts stored in the `assets/fonts` directory.

**icons.scss**  
```scss
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(../assets/fonts/MaterialIcons-Regular.woff2) format('woff2');
}

@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(../assets/fonts/MaterialIcons-Outlined.woff2) format('woff2');
}

/* Additional @font-face configs */

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

.material-icons-outlined {
  font-family: 'Material Icons Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

/* Additional .material-icons-{style} styles */
```

`icons.scss` is then imported into [theme.scss](./src/theme/theme.scss).

In [ThemeService](./src/app/services/theme.service.ts), a `registerFonts()` function registers each of the non-standard icon sets the [MatIconRegistry](https://material.angular.io/components/icon/api#MatIconRegistry) service.

> Only the relevant service code is shown below for brevity.

**theme.service.ts**  
```ts
import { MatIconRegistry } from '@angular/material/icon';

@Injectable()
export class ThemeService {
  constructor(
    private iconRegistry: MatIconRegistry
  ) { }

  registerFonts = () => {
    this.iconRegistry.registerFontClassAlias('material-icons-outlined');
    this.iconRegistry.registerFontClassAlias('material-icons-round');
    this.iconRegistry.registerFontClassAlias('material-icons-sharp');
    this.iconRegistry.registerFontClassAlias('material-icons-two-tone');
  }
}
```

> If you want to set a different icon style as the default, you can set it with `this.iconRegistry.setDefaultFontSetClass(className: string)`.
>
> For instance, to set `material-icons-outlined` as the default, you would call `this.iconRegistry.setDefaultFontSetClass('material-icons-outlined')`.

In the [AppComponent](./src/app/app.component.ts) constructor, `ThemeService.registerFonts()` is called:

**app.component.ts**  
```ts
constructor(
  public themer: ThemeService
) {
  themer.registerFonts();
}
```

In order to use any of the non-default icon sets, simply set appropriate **class** on `<mat-icon>`:

```html
<mat-icon class="material-icons-outlined">home</mat-icon>
<mat-icon class="material-icons-round">home</mat-icon>
<mat-icon class="material-icons-sharp">home</mat-icon>
<mat-icon class="material-icons-two-tone">home</mat-icon>
```

## Bugs
[Back to Top](#material-icons)

Currently, the **Two Tone** icons theme cannot be colored. Attempting to set the color via Angular Material's `color` attribute, or directly via a **style** in CSS, does not affect the icon.

[![icons-light](https://user-images.githubusercontent.com/14102723/85060352-1c289b00-b173-11ea-97e5-f66ee780be7c.png)](https://user-images.githubusercontent.com/14102723/85060352-1c289b00-b173-11ea-97e5-f66ee780be7c.png)

Without any additional modifications to the baseline app, if you were to switch to dark mode, the icons would remain dark, and therefore difficult to see:

[![two-tone-dark](https://user-images.githubusercontent.com/14102723/85062796-1cc33080-b177-11ea-9794-49b294cbf7e2.png)](https://user-images.githubusercontent.com/14102723/85062796-1cc33080-b177-11ea-9794-49b294cbf7e2.png)

A workaround, in the event that you REALLY want to use this icon theme, is to style the icon set with a `filter` on the `.app-dark` theme style in [theme.scss](./src/theme/theme.scss):

**theme.scss**
```scss
.app-dark {
  $default-theme: mat-dark-theme($dark-primary, $dark-accent, $dark-warn);
  @include style-theme($default-theme);
  @include style-glow($default-theme);
  @include angular-material-theme($default-theme);

  .material-icons-two-tone {
    filter: invert(1);
  }
}
```

[![two-tone-fixed](https://user-images.githubusercontent.com/14102723/85063030-83e0e500-b177-11ea-8812-39f80803af5f.png)](https://user-images.githubusercontent.com/14102723/85063030-83e0e500-b177-11ea-8812-39f80803af5f.png)

## References
[Back to Top](#material-icons)

* [Material Design Icons](https://material.io/resources/icons)
* [Material Design Icons Developers Guide](https://google.github.io/material-design-icons/)
* [Google - Material Design Icons Repository](https://github.com/google/material-design-icons)
* [material-icons Package Repository](https://github.com/marella/material-icons)
* [Angular Material - Icon](https://material.angular.io/components/icon/overview)
  * [MatIconRegistry](https://material.angular.io/components/icon/api#MatIconRegistry)
* [Google API StyleSheet](https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp)
  * `https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp`
