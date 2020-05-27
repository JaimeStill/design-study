# [Your Brain on Front End Development](https://css-tricks.com/your-brain-on-front-end-development/)

* [Multi-line Padded Text](#multi-line-padded-text)

## Multi-line Padded Text

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

