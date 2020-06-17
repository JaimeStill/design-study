# Backdrop Filters

* [Inspiration](#inspiration)
  * [iOS and Apple CarPlay](#ios-and-apple-carplay)
  * [Acrylic - Microsoft Fluent Design](#acrylic---microsoft-fluent-design)
* [Research](#research)
* [Proofs of Concept](#proofs-of-concept)
* [Implementation](#implementation)
* [References](#references)

[![backdrop-filters](https://user-images.githubusercontent.com/14102723/84931805-545fa900-b0a1-11ea-89f1-105e2138a2fe.gif)](https://user-images.githubusercontent.com/14102723/84931805-545fa900-b0a1-11ea-89f1-105e2138a2fe.gif)

The idea of applying filters to obscure backgrounds for legible text on an attractive UI element was primarily inspired by interactions with the following interfaces:

* iOS and Apple CarPlay
* Acrylic in the Microsoft Fluent Design in Windows 10

## Inspiration
[Back to Top](#backdrop-filters)

### iOS and Apple CarPlay
[Back to Top](#backdrop-filters)

[![ios](https://user-images.githubusercontent.com/14102723/84932253-08f9ca80-b0a2-11ea-9c51-dcf37edffc20.png)](https://user-images.githubusercontent.com/14102723/84932253-08f9ca80-b0a2-11ea-9c51-dcf37edffc20.png)

The above image demonstrates using filters to obscure the background and bring focus to the primary UI elements in the current context. From left to right, the above image demonstrates:

* Today View
* Command Center
* Folder View

Additionally, when using Spotify in Apple CarPlay, the Now Playing view achieves a similar effect using album art:

[![apple-carplay](https://user-images.githubusercontent.com/14102723/84932347-27f85c80-b0a2-11ea-83a0-bb1945b283a1.png)](https://user-images.githubusercontent.com/14102723/84932347-27f85c80-b0a2-11ea-83a0-bb1945b283a1.png)

> These effects are accomplished using the [UIVisualEffectView](https://developer.apple.com/documentation/uikit/uivisualeffectview) class in [UIKit](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/).

### Acrylic - Microsoft Fluent Design
[Back to Top](#backdrop-filters)

[![acrylic](https://user-images.githubusercontent.com/14102723/84932772-d00e2580-b0a2-11ea-876d-06dd73a792ab.png)](https://user-images.githubusercontent.com/14102723/84932772-d00e2580-b0a2-11ea-876d-06dd73a792ab.png)

In [Microsoft's Fluent Design](https://www.microsoft.com/design/fluent) system, the [Acrylic](https://docs.microsoft.com/en-us/windows/uwp/design/style/acrylic) material is used to add translucent filters to UI elements. It is composed using a combination of

* Gaussian blur
* Luminosity blend
* Tint/Color blend
* Noise texture

layered above a background:

[![acrylic-recipe](https://user-images.githubusercontent.com/14102723/84932771-cf758f00-b0a2-11ea-8bea-6d7687e57401.jpg)](https://user-images.githubusercontent.com/14102723/84932771-cf758f00-b0a2-11ea-8bea-6d7687e57401.jpg)

## Research
[Back to Top](#backdrop-filters)

With the [CSS backdrop-filter](https://css-tricks.com/almanac/properties/b/backdrop-filter/) property, the intended goal can be accomplished.

This topic was explored extensively in the [filters](../../article-notes/09.filters.md) study.

## Proofs of Concept
[Back to Top](#backdrop-filters)

My initial task was to establish a standard for generating these effects using just HTML / CSS. The [frosted-card-proto](https://codepen.io/JaimeStill/pen/abdmdXp) CodePen served as the sandbox for establishing a reusable pattern.

[![frosted-card-proto](https://user-images.githubusercontent.com/14102723/84933966-a81fc180-b0a4-11ea-93aa-d39fa0c6883d.png)](https://user-images.githubusercontent.com/14102723/84933966-a81fc180-b0a4-11ea-93aa-d39fa0c6883d.png)

```html
<div class="container">
  <div class="tower background">
    <div class="card">
      <section class="header">
        <h1 class="flex">Geometric Tower</h1>
        <p>Action</p>
      </section>
      <section class="content flex">
        <img src="https://user-images.githubusercontent.com/14102723/84674821-71f20e80-aef9-11ea-9bfb-c2da7fbdae2a.png">
      </section>
      <section class="footer">
        <p>Action A</p>
        <p>Action B</p>
        <p>Action C</p>
      </section>
    </div>
  </div>
  <div class="homer background light">
    <div class="card">
      <section class="header">
        <h1 class="flex">Homer Galaxy</h1>
        <p>Action</p>
      </section>
      <section class="content flex">
        <img src="https://user-images.githubusercontent.com/14102723/84673513-cd230180-aef7-11ea-9ea8-bf24ed8953d5.jpg">
      </section>
      <section class="footer">
        <p>Action A</p>
        <p>Action B</p>
        <p>Action C</p>
      </section>
    </div>
  </div>
</div>
```

```css
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
}

.content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 12px;
}

.content img {
  max-width: 60%;
  border: 1px solid rgba(255,255,255,.67);
}

.header,
.footer {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 12px;
}

.header {
  justify-content: flex-start;
}

.footer {
  justify-content: space-between;
}

.background {
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  width: 800px;
  height: 100%;
  margin: 8px;
}

.card {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(20px) brightness(1.4);
}

.tower {
  background-image: url(https://user-images.githubusercontent.com/14102723/84674821-71f20e80-aef9-11ea-9bfb-c2da7fbdae2a.png)
}

.homer {
  background-image: url(https://user-images.githubusercontent.com/14102723/84673513-cd230180-aef7-11ea-9ea8-bf24ed8953d5.jpg);
}
```
Once the pattern was established, I decided to create an [Angular Attribute Directive](https://angular.io/guide/attribute-directives) that allows filters to be applied and transitioned. Essentially, a list of default filters is specified, as well as a list of filters to transition to when the element is hovered.

This effort was conducted in the [css-filter-directive-proto](https://stackblitz.com/edit/css-filter-directive-proto) StackBlitz project.

[![css-filter-directive-proto](https://user-images.githubusercontent.com/14102723/84931805-545fa900-b0a1-11ea-89f1-105e2138a2fe.gif)](https://user-images.githubusercontent.com/14102723/84931805-545fa900-b0a1-11ea-89f1-105e2138a2fe.gif)

> In the following directive definition, the constructor injected `el: ElementRef` is a reference to the element that has the attribute directive applied to it. Notice that HTML events can be intercepted and registered using the `HostListener` decorator from `@angular/core`.

**backdrop.directive.ts**  
```ts
import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[backdrop]'
})
export class BackdropDirective implements OnInit {
  @Input() filters: string;
  @Input() hover: string;

  constructor(
    public el: ElementRef
  ) { }

  ngOnInit() {
    this.el.nativeElement.style.backdropFilter = this.filters;
    this.el.nativeElement.classList.add('backdropped');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backdropFilter = this.hover;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backdropFilter = this.filters;
  }
}
```

**backdrop-card.component.ts**  
```ts
import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'backdrop-card',
  templateUrl: 'backdrop-card.component.html',
  styleUrls: ['backdrop-card.component.scss']
})
export class BackdropCardComponent {
  @Input() image: string = 'https://user-images.githubusercontent.com/14102723/84674821-71f20e80-aef9-11ea-9bfb-c2da7fbdae2a.png';
  @Input() backdropHover = "blur(20px) brightness(1.5) grayscale(0)";
  @Input() backdropFilters = "blur(20px) brightness(1.5) grayscale(1)";
  @Input() size = 640;
}
```

> In the following, notice the `section.card` element has the `backdrop` directive set, as well as its `filters` and `hover` input properties.

**backdrop-card.component.html**  
```html
<section class="background"
         [style.backgroundImage]="'url('+image+')'"
         [style.width.px]="size">
	<section class="card"
           backdrop
           [filters]="backdropFilters"
           [hover]="backdropHover">
		<ng-content select=".header"></ng-content>
    <ng-content select=".content"></ng-content>
    <ng-content select=".footer"></ng-content>
	</section>
</section>
```

**backdrop-card.component.scss**
```scss
.background {
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
}

.card {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
```

> Example card implementation showing `backdropFilters`, `backdropHover`, and `image` overwritten

**home.component.html**  
```html
<backdrop-card class="elevated"
               backdropFilters="blur(20px) brightness(1.5) hue-rotate(180deg)"
               backdropHover="blur(20px) brightness(1.5) hue-rotate(0)"
               [image]="imageB"
               [style.color]="'rgba(255,255,255,.87)'">
  <section class="header"
           [style.padding.px]="8">
    <span class="mat-title">Custom</span>
  </section>
  <section class="content"
           fxLayout="column"
           fxLayoutAlign="center center">
    <img [src]="imageB"
         [style.width.%]="60"
         [style.border-radius.px]="4">
  </section>
  <section class="footer"
           fxLayout="row"
           fxLayoutAlign="space-between center"
           [style.padding.px]="8">
    <button mat-icon-button>
      <mat-icon>code</mat-icon>
    </button>
    <button mat-icon-button>
      <mat-icon>change_history</mat-icon>
    </button>
    <button mat-icon-button>
      <mat-icon>api</mat-icon>
    </button>
  </section>
</backdrop-card>
```

## Implementation
[Back to Top](#backdrop-filters)

Using the `BackdropDirective` created in the StackBlitz prototype, I was able to create an example person card that implements this strategy:

[![person-card-prototype](https://user-images.githubusercontent.com/14102723/84935800-3e54e700-b0a7-11ea-95cf-5c123aebe676.png)](https://user-images.githubusercontent.com/14102723/84935800-3e54e700-b0a7-11ea-95cf-5c123aebe676.png)

Relevant Files:

* [person.ts](./src/app/models/person.ts)
* [people.service.ts](./src/app/models/people.service.ts)
* [backdrop.directive.ts](./src/app/directives/backdrop.directive.ts)
* [person-card.component.ts](./src/app/components/person-card.component.ts)
* [person-card.component.html](./src/app/components/person-card.component.html)
* [person-card.component.scss](./src/app/components/person-card.component.scss)
* [home.component.ts](./src/app/routes/home/home.component.ts)
* [home.component.html](./src/app/routes/home/home.component.html)

## References
[Back to Top](#backdrop-filters)

* [CSS backdrop-filter](https://css-tricks.com/almanac/properties/b/backdrop-filter/)
* [Apple - UIKit](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)
  * [UIVisualEffectView](https://developer.apple.com/documentation/uikit/uivisualeffectview)
* [Microsoft's Fluent Design](https://www.microsoft.com/design/fluent)
  * [Acrylic](https://docs.microsoft.com/en-us/windows/uwp/design/style/acrylic)
* [Angular Attribute Directive](https://angular.io/guide/attribute-directives)
* [CSS Filters study](../../article-notes/09.filters.md)
* [frosted-card-proto - CodePen](https://codepen.io/JaimeStill/pen/abdmdXp)
* [css-filter-directive-proto - StackBlitz](https://stackblitz.com/edit/css-filter-directive-proto)
