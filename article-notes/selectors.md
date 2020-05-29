# Selectors

* [Table of Selectors](#table-of-selectors)
* [Type Selector](#type-selector)
* [Universal Selector](#universal-selector)
* [Class Selector](#class-selector)
* [Id Selector](#id-selector)
* [Attribute Selector](#attribute-selector)
    * [Presence and Value Selectors](#presence-and-value-selectors)
    * [Substring Matching Selectors](#substring-matching-selectors)
    * [Case Insensitivity](#case-insensitivity)
* [Pseudo-class Selector](#pseudo-class-selector)
* [Pseudo-element Selector](#pseudo-element-selector)
* [Descendent Combinator](#descendent-combinator)
* [Child Combinator](#child-combinator)
* [Adjacent Sibling Combinator](#adjacent-sibling-combinator)
* [General Sibling Combinator](#general-sibling-combinator)

[Source](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)

## Table of Selectors
[Back to Top](#selectors)

Selector | Example | Description
---------|---------|------------
[Type Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Type_selectors) | `h1 { }` | The **type selector** matches elements by node name. In other words, it selects all elements of the given type within a document.
[Universal Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#The_universal_selector) | `* { }` | The **universal selector** (`*`) matches elements of any type.
[Class Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Class_selectors) | `.box { }` | The **class selector** matches elements based on the contents of their `class` attribute.
[Id Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#ID_Selectors) | `#unique { }` | The **Id Selector** matches an element based on the value of its `id` attribute. In order for the element to be selected, its `id` attribute must match exactly the value given in the selector.
[Attribute Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) | `a[title] { }` | The **attribute selector** matches elements based on the presence or value of a given attribute.
[Pseudo-class Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class) | `p:first-child { }` | A **pseudo-class** is a keyword added to a selector that specifies a special state of selected element(s). For example, [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) can be used to change a button's color when the user's pointer hovers over it.
[Pseudo-element Selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element) | `p::first-line { }` | A **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, [::first-line](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line) can be used to change the font of the first line of a paragraph.
[Descendent Combinator](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Descendant_Selector) | `article p` | The **descendent combinator** - typically represented by a single space (` `) character - combines two selectors such that elements matched by the second selector are selected if they have an acnestor (parent, parent's parent, parent's parent's parent, etc) element matching the first selector. Selectors that utilize a descendent combinator are called descendant selectors.
[Child Combinator](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Child_combinator) | `article > p` | The **child combinator** (`>`) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.
[Adjacent Sibling Combinator](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Adjacent_sibling) | `h1 + p` | The **adjacent sibling combinator** (`+`) separates two selectors and matches the second element only if it *immediately* follows the first element, and both are children of the same parent [element](https://developer.mozilla.org/en-US/docs/Web/API/Element).
[General Sibling Combinator](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators#General_sibling) | `h1 ~ p` | The **general sibling combinator** (`~`) separates two selectors and matches the second element only if it follows the first element (though not necessarily immediately), and both are children of the same parent [element](https://developer.mozilla.org/en-US/docs/Glossary/element).

## Type Selector
[Back to Top](#selectors)

The **type selector** matches elements by node name. In other words, it selects all elements of the given type within a document.

[![type-01](https://user-images.githubusercontent.com/14102723/83294170-de130980-a1ba-11ea-9c51-ed546029c709.png)
](https://user-images.githubusercontent.com/14102723/83294170-de130980-a1ba-11ea-9c51-ed546029c709.png)

```css
span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

```html
<h1>Type selectors</h1>
<p>Veggies es bonus vobis, proinde vos postulo essum magis <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo
melon azuki bean garlic.</p>

<p>Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard
greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>

<p>Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce kohlrabi amaranth water spinach avocado
daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach
</p>
```

## Universal Selector
[Back to Top](#selectors)

The **universal selector** (`*`) matches elements of any type.

[![universal-01](https://user-images.githubusercontent.com/14102723/83294279-0c90e480-a1bb-11ea-9ca5-87ea21bdf5f8.png)](https://user-images.githubusercontent.com/14102723/83294279-0c90e480-a1bb-11ea-9ca5-87ea21bdf5f8.png)

```css
* {
  margin: 0;
}
```

```html
<h1>Universal selector</h1>
<p>Veggies es bonus vobis, proinde vos postulo essum magis <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo
melon azuki bean garlic.</p>

<p>Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard
greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
```

## Class Selector
[Back to Top](#selectors)

The **class selector** matches elements based on the contents of their `class` attribute.

[![class-01](https://user-images.githubusercontent.com/14102723/83294382-3944fc00-a1bb-11ea-9143-fe1f5ef1d855.png)](https://user-images.githubusercontent.com/14102723/83294382-3944fc00-a1bb-11ea-9143-fe1f5ef1d855.png)

```css
.highlight {
  background-color: yellow;
}
```

```html
<h1 class="highlight">Class selectors</h1>
<p>Veggies es bonus vobis, proinde vos postulo essum magis <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>

<p class="highlight">Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>    
```

**Targeting classes on particular elements**  

[![class-02](https://user-images.githubusercontent.com/14102723/83294493-61ccf600-a1bb-11ea-93fd-9e2f8f9d48a4.png)](https://user-images.githubusercontent.com/14102723/83294493-61ccf600-a1bb-11ea-93fd-9e2f8f9d48a4.png)

```css
span.highlight {
  background-color: yellow;
}

h1.highlight {
  background-color: pink;
}
```

```html
<h1 class="highlight">Class selectors</h1>
<p>Veggies es bonus vobis, proinde vos postulo essum magis <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>

<p class="highlight">Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>    
```

**Target an element if it has more than one class applied**

[![class-03](https://user-images.githubusercontent.com/14102723/83294648-9a6ccf80-a1bb-11ea-826e-98ae5325c2d8.png)](https://user-images.githubusercontent.com/14102723/83294648-9a6ccf80-a1bb-11ea-826e-98ae5325c2d8.png)

```css
.notebox {
  border: 4px solid #666;
  padding: .5em;
}

.notebox.warning {
  border-color: orange;
  font-weight: bold;
}

.notebox.danger {
  border-color: red;
  font-weight: bold;
}
```

```html
<div class="notebox">
  This is an informational note.
</div>

<div class="notebox warning">
  This note shows a warning.
</div>

<div class="notebox danger">
  This note shows danger!
</div>

<div class="danger">
  This won't get styled — it also needs to have the notebox class
</div>
```

## Id Selector
[Back to Top](#selectors)

The **Id Selector** matches an element based on the value of its `id` attribute. In order for the element to be selected, its `id` attribute must match exactly the value given in the selector.

[![id-01](https://user-images.githubusercontent.com/14102723/83294722-c38d6000-a1bb-11ea-834f-6ad12066b460.png)](https://user-images.githubusercontent.com/14102723/83294722-c38d6000-a1bb-11ea-834f-6ad12066b460.png)

```css
#one {
  background-color: yellow;
}

h1#heading {
  color: rebeccapurple;
}
```

```html
<h1 id="heading">ID selector</h1>
<p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo
melon azuki bean garlic.</p>

<p id="one">Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard
greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>    
```

## Attribute Selector
[Back to Top](#selectors)

The **attribute selector** matches elements based on the presence or value of a given attribute.

### Presence and Value Selectors
[Back to Top](#selectors)

Selector | Example | Description
---------|---------|------------
`[attr]` | `a[title]` | Matches elements with an *attr* attribute (whose name is the value in square brackets).
`[attr=value]` | `a[href="https://example.com"]` | Matches elements with an *attr* attribute whose value is exactly *value* - the string inside the quotes.
`[attr~=value]` | `p[class~="special"]` | Matches elements wiht an *attr* attribute whose value is exactly *value*, or contains *value* in its (space separated) list of values.
`[attr|=value]` | `div[lang|="zh"]` | Matches elements with an *attr* whose value is exactly *value* or begins with *value* immediately followed by a hyphen.

[![attr-01](https://user-images.githubusercontent.com/14102723/83294794-e7e93c80-a1bb-11ea-9fc8-7c7de9e28369.png)](https://user-images.githubusercontent.com/14102723/83294794-e7e93c80-a1bb-11ea-9fc8-7c7de9e28369.png)

```css
li[class] {
  font-size: 200%;
}

li[class="a"] {
  background-color: yellow;
}

li[class~="a"] {
  color: red;
}
```

```html
<h1>Attribute presence and value selectors</h1>
<ul>
  <li>Item 1</li>
  <li class="a">Item 2</li>
  <li class="a b">Item 3</li>
  <li class="ab">Item 4</li>
</ul>
```

### Substring Matching Selectors
[Back to Top](#selectors)

Selector | Example | Description
---------|---------|------------
`[attr^=value]` | `li[class^="box-"]` | Matches elements with an *attr* attribute (whose name is the value in square brackets), whose value begins with *value*.
`[attr$=value]` | `li[class$="-box"]` | Matches elements with an *attr* attribute whose value ends with *value*.
`[attr*=value]` | `li[class*="box"]` | Matches elements with an *attr* attribute whose value contains *value* anywhere within the string.

> It may help to note that `^` and `$` have long been used as *anchors* in so-called *regular expressions* to mean *begins with* and *ends with*.

[![attr-02](https://user-images.githubusercontent.com/14102723/83294858-0a7b5580-a1bc-11ea-8f98-44699486db18.png)](https://user-images.githubusercontent.com/14102723/83294858-0a7b5580-a1bc-11ea-8f98-44699486db18.png)

```css
li[class^="a"] {
  font-size: 200%;
}

li[class$="a"] {
  background-color: yellow;
}

li[class*="a"] {
  color: red;
}
```

```html
<h1>Attribute substring matching selectors</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="ab">Item 2</li>
  <li class="bca">Item 3</li>
  <li class="bcabc">Item 4</li>
</ul>
```

### Case Insensitivity
[Back to Top](#selectors)

If you want to match attribute values case-insensitively you can use the value `i` before the closing bracket.

[![attr-03](https://user-images.githubusercontent.com/14102723/83294962-34cd1300-a1bc-11ea-87a5-74421a7adac3.png)](https://user-images.githubusercontent.com/14102723/83294962-34cd1300-a1bc-11ea-87a5-74421a7adac3.png)

```css
li[class^="a"] {
  background-color: yellow;
}

li[class^="a" i] {
  color: red;
}
```

```html
<h1>Case-insensitivity</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="A">Item 2</li>
  <li class="Ab">Item 3</li>
</ul>
```

## Pseudo-class Selector
[Back to Top](#selectors)

A **pseudo-class** is a keyword added to a selector that specifies a special state of selected element(s). For example, [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) can be used to change a button's color when the user's pointer hovers over it.

## Pseudo-element Selector
[Back to Top](#selectors)

A **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, [::first-line](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line) can be used to change the font of the first line of a paragraph.

## Descendant Combinator
[Back to Top](#selectors)

The **descendent combinator** - typically represented by a single space (` `) character - combines two selectors such that elements matched by the second selector are selected if they have an acnestor (parent, parent's parent, parent's parent's parent, etc) element matching the first selector. Selectors that utilize a descendent combinator are called descendant selectors.

## Child Combinator
[Back to Top](#selectors)

The **child combinator** (`>`) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.

## Adjacent Sibling Combinator
[Back to Top](#selectors)

The **adjacent sibling combinator** (`+`) separates two selectors and matches the second element only if it *immediately* follows the first element, and both are children of the same parent [element](https://developer.mozilla.org/en-US/docs/Web/API/Element).

## General Sibling Combinator
[Back to Top](#selectors)

The **general sibling combinator** (`~`) separates two selectors and matches the second element only if it follows the first element (though not necessarily immediately), and both are children of the same parent [element](https://developer.mozilla.org/en-US/docs/Glossary/element).
