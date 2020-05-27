# Glowing Elevation

[![glowing-elevation](https://user-images.githubusercontent.com/14102723/82961826-75464a00-9f8c-11ea-84b8-5938c0e5e040.gif)](https://user-images.githubusercontent.com/14102723/82961826-75464a00-9f8c-11ea-84b8-5938c0e5e040.gif)

This idea was created from the observation that shadows in dark mode are almost imperceptible on a lot of screens. With this capability, rather than a shadow showing the depth of an element, it is indicated with a glowing light against a dark background.

## Research
[Back to Top](#glowing-elevation)

My initial approach was going to be to mimic the functionality of [_elevation.scss](https://github.com/angular/components/blob/caad0b54ed41949f0ee529c152508749875bc9af/src/material/core/style/_elevation.scss) and have it operate as a standalone implementation. However, after reading the [elevation guide](https://github.com/angular/components/blob/8050f633b56b6c048fc72dad2ab79304afdfad19/guides/elevation.md), I found that you can pass a color to the [mat-elevation](https://github.com/angular/components/blob/8050f633b56b6c048fc72dad2ab79304afdfad19/guides/elevation.md#mixins) mixin.

## Proof of Concept
[Back to Top](#glowing-elevation)

In studying both [_elevation.scss]() and [_variables.scss](), I was able to create a minimal representation of the idea in order to determine whether it was feasible or not.

[![glowing-proof-of-concept](https://user-images.githubusercontent.com/14102723/82959182-1cbf7e80-9f85-11ea-8bc0-a3b3b335ddb4.png)](https://codepen.io/JaimeStill/pen/yLYWYaQ?editors=1111)

*Click to Open Pen*

In this example, the [umbra-map](https://github.com/angular/components/blob/caad0b54ed41949f0ee529c152508749875bc9af/src/material/core/style/_elevation.scss#L34), [penumbra-map](https://github.com/angular/components/blob/caad0b54ed41949f0ee529c152508749875bc9af/src/material/core/style/_elevation.scss#L66), and [ambient-map](https://github.com/angular/components/blob/caad0b54ed41949f0ee529c152508749875bc9af/src/material/core/style/_elevation.scss#L98) values used for elevation in the [Angular Components](https://github.com/angular/components) library are captured at levels [4](https://github.com/angular/components/blob/caad0b54ed41949f0ee529c152508749875bc9af/src/material/core/style/_elevation.scss#L42) and [8](https://github.com/angular/components/blob/caad0b54ed41949f0ee529c152508749875bc9af/src/material/core/style/_elevation.scss#L46), and assigned to the `box-shadow` properties of both `.el-4` and `.el-8` respectively:

```css
.el-4 {
  box-shadow: 0px 2px 4px -1px #1f1eff,
              0px 4px 5px 0px #1f1eff,
              0px 1px 10px 0px #1f1eff;
}

.el-8 {
  box-shadow: 0px 5px 5px -3px #1f1eff,
              0px 8px 10px 1px #1f1eff,
              0px 3px 14px 2px #1f1eff;
              
}
```

In the JavaScript section, the `section.example` is captured as a `const`. Event listeners are added for both `mouseenter` and `mouseleave`:

* When the mouse is hovered over `section.example`, the class `.el-4` is removed, and `.el-8` is applied.

* When the mouse leaves `section.example`, the class `.el-8` is removed, and `.el-4` is applied.

```js
const section = document.querySelector('.example');  
console.log(section);

section.addEventListener('mouseenter', () => {
  section.classList.remove('el-4');
  section.classList.add('el-8');
});

section.addEventListener('mouseleave', () => {
  section.classList.remove('el-8');
  section.classList.add('el-4');
});
```

The change in elevation is smoothly transitioned via the `.example` class:

```css
.example {
  margin: 8px;
  padding: 8px;
  background-color: #333;
  transition: box-shadow 280ms ease-in-out;
}
```

## Implementation

Because [styles.scss](./src/theme/styles.scss) imports the material theming library, it is imported in [glow.scss](./src/theme/glow.scss) so that the library's elevation mixins can be accessed.

It contains a singular **mixin** that receives the current **theme** as an argument. The **primary**, **accent**, and **warn** values are retrieved from the theme as variables. 

Classes for static glowing, as well as a transitioning class for when a mouse hovers an element, are created at each elevation level, `1 - 24` for each color value.

[**glow.scss**](./src/theme/glow.scss)  

> File condensed for demonstration purposes

```scss
@mixin style-glow($theme) {
  $p: map-get($theme, primary);
  $a: map-get($theme, accent);
  $w: map-get($theme, warn);

  $primary: mat-color($p);
  $accent: mat-color($a);
  $warn: mat-color($w);

  .glow-1-primary {
    @include mat-elevation(1, $primary);
  }

  /*
    elevation levels 2 - 23
  */

  .glow-24-primary {
    @include mat-elevation(24, $primary);
  }

  .glowing-primary {
    @include mat-elevation-transition;
    @include mat-elevation(4, $primary);

    &:hover {
      @include mat-elevation(8, $primary);
    }
  }

  /*
    .glow-x-accent
    .glowing-accent
    
    .glow-x-warn
    .glowing-warn
  */
}
```

[glow.scss](./src/theme/glow.scss) is imported into [theme.scss](./src/theme/theme.scss), and applied to each of the theme classes:

[**theme.scss**](./src/theme/theme.scss)

> File condensed for demonstration purposes

```scss
@import './glow.scss'

.app-light {
  @include($default-theme);
}

.app-dark {
  @include($default-theme);
}
```

Finally, in [home.component.html](./src/app/routes/home/home.component.html), the classes can be applied to many `<section>` elements to demonstrate functionality.

[**home.component.html**](./src/app/routes/home/home.component.html)

> File condensed for demonstration purposes

```html
<section class="example background-card glowing-primary">
  <code class="primary">glowing-primary</code>
</section>

<section class="example background-card glowing-accent">
  <code class="accent">glowing-accent</code>
</section>

<section class="example background-card glowing-warn">
  <code class="warn">glowing-warn</code>
</section>

<section class="example background-card glow-12-primary">
  <code class="primary">glow-12-primary</code>
</section>

<section class="example background-card glow-12-accent">
  <code class="accent">glow-12-accent</code>
</section>

<section class="example background-card glow-12-warn">
  <code class="warn">glow-12-warn</code>
</section>
```

## References

* [Angular Components - GitHub](https://github.com/angular/components)

  * [_elevation.scss](https://github.com/angular/components/blob/caad0b54ed41949f0ee529c152508749875bc9af/src/material/core/style/_elevation.scss)
  * [_variables.scss](https://github.com/angular/components/blob/caad0b54ed41949f0ee529c152508749875bc9af/src/material/core/style/_variables.scss)
  * [elevation guide](https://github.com/angular/components/blob/8050f633b56b6c048fc72dad2ab79304afdfad19/guides/elevation.md)

* [glowing-elevation - CodePen](https://codepen.io/JaimeStill/pen/yLYWYaQ?editors=1111)

