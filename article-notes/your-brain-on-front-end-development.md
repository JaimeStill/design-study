# [Your Brain on Front End Development](https://css-tricks.com/your-brain-on-front-end-development/)

* [Multi-line Padded Text](#multi-line-padded-text)
* [Writing Mode](#writing-mode)
* [Text Over Image](#text-over-image)
* [Lined Menu Icons](#lined-menu-icons)

## Multi-line Padded Text
[Back to Top](#your-brain-on-front-end-development)

![multi-line-padded-text](https://user-images.githubusercontent.com/14102723/83054708-d4559e80-a020-11ea-984f-d2068dc47259.png)


[See on codepen](https://codepen.io/JaimeStill/pen/qBOGBer)  

```html
<h1 class="padded-multiline">
  <span>Echoes and Silence, Patience and Grace</span>
</h1>
```

> Some styles were removed for clarity

```css
.padded-multiline {
  line-height: 2;
  width: 300px;
  margin: 20px auto;
}

.padded-multiline span {
  display: inline;
  padding: 0.45rem;  
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
```

## Writing Mode
[Back to Top](#your-brain-on-front-end-development)

![writing-mode](https://user-images.githubusercontent.com/14102723/83055101-63fb4d00-a021-11ea-8454-e2db2ab212e2.png)

[See on codepen](https://codepen.io/JaimeStill/pen/GRpaPQY)

```html
<section class="button-group">
  <button class="lr" onclick="toggleLr()">vertical-lr</button>
  <button class="rl" onclick="toggleRl()">vertical-rl</button>
</section>

<h1 class="writing-v-lr">Jaime Still</h1>
```

> Some styles removed for clarity

```css
.writing-v-lr {
  writing-mode: vertical-lr;
}

.writing-v-rl {
  writing-mode: vertical-rl;
}
```

## Text Over Image
[Back to Top](#your-brain-on-front-end-development)

![text-over-image](https://user-images.githubusercontent.com/14102723/83057046-5e533680-a024-11ea-8a37-bb2fe1552072.png)

[See on codepen](https://codepen.io/JaimeStill/pen/LYpoqWg)

```html
<div class="space-x">
  <header>
    <h2>
      Crew Dragon and Falcon 9 | SpaceX
    </h2>
  </header>
</div>
```

> Some style removed for clarity

```css
.space-x {
  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4)
    ),
    url(https://user-images.githubusercontent.com/14102723/83056164-ecc6b880-a022-11ea-8f3c-36e1022d2d48.png);
  width: 600px;
  height: 400px;
  position: relative;
  overflow: hidden;
  margin: 20px;
}

.space-x > header {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 10px;
}

.space-x > header > h2 {
  margin: 0;
  color: white;
  text-shadow: 0 1px 0 black;
}
```

## Lined Menu Icons
[Back to Top](#your-brain-on-front-end-development)

[Collection - Lined Menu Icons](https://codepen.io/collection/IDwnG)