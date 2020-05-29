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
* [Pseudo References](#pseudo-references)
  * [Pseudo Classes](#pseudo-classes)
  * [Pseudo Elements](#pseudo-elements)
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
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

<p>
  Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach.
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
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
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
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>

<p class="highlight">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
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
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>

<p class="highlight">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>    
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
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>

<p id="one">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>    
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

[![pseudo-class-01](https://user-images.githubusercontent.com/14102723/83295558-29c6b280-a1bd-11ea-83c0-51a0f7748464.png)](https://user-images.githubusercontent.com/14102723/83295558-29c6b280-a1bd-11ea-83c0-51a0f7748464.png)

```css
article p:first-child {
  font-size: 120%;
  font-weight: bold;
}
```

```html
<article>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>    
```

## Pseudo-element Selector
[Back to Top](#selectors)

A **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, [::first-line](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line) can be used to change the font of the first line of a paragraph.

[![pseudo-element-01](https://user-images.githubusercontent.com/14102723/83295648-4f53bc00-a1bd-11ea-9127-42f731f33be9.png)](https://user-images.githubusercontent.com/14102723/83295648-4f53bc00-a1bd-11ea-9127-42f731f33be9.png)

```css
article p::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

```html
<article>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

## Pseudo References
[Back to Top](#selectors)

### Pseudo Classes
[Back to Top](#selectors)

Selector | Description
---------|------------
[:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) | Matches when the user activates (for example clicks on) an element.
[:any-link](https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link) | Matches both the `:link` and `:visited` states of a link.
[:blank](https://developer.mozilla.org/en-US/docs/Web/CSS/:blank) | Matches an [`<input>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) whose input value is empty.
[:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) | Matches a radio button or checkbox in the selected state.
`:current` | Matches the element, or an ancestor of the element, that is currently being displayed.
[:default](https://developer.mozilla.org/en-US/docs/Web/CSS/:default) | Matches the one or more UI elements that are the default among a set of similar elements.
[:dir](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir) | Select an element based on its directionality (value of the HTML [dir](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attribute or CSS [direction](https://developer.mozilla.org/en-US/docs/Web/CSS/direction) property).
[:disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled) | Matches user interface elements that are in a disabled state.
[:empty](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) | Matches an element that has no children except optionally white space.
[:enabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled) | Matches user interface elements that are in an enabled state.
[:first](https://developer.mozilla.org/en-US/docs/Web/CSS/:first) | In [Paged Media](https://developer.mozilla.org/en-US/docs/Web/CSS/Paged_Media), matches the first page.
[:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) | Matches an element that is first among its siblings.
[:first-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type) | Matches an element which is first of a certain type among its siblings.
[:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)  | Matches when an element has focus.
[:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) | Matches when an element has focus and the focus should be visible to the user.
[:focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) | Matches an element with focus plus an element with a descendent that has focus.
`:future` | Matches the elements after the current element.
[:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) | Matches when the user hovers over an element.
[:indeterminate](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate) | Matches UI elements whose value is in an indeterminate state, usually [checkboxes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).
[:in-range](https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range) | Matches an element with a range when its value is in-range.
[:invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid) | Matches an element, such as an `<input>`, in an invalid state.
[:lang](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) | Matches an element based on language (value of the HTML [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute).
[:last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child) | Matches an element which is last among its siblings.
[:last-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type) | Matches an element of a certain type that is last among its siblings.
[:left](https://developer.mozilla.org/en-US/docs/Web/CSS/:left) | In [Paged Media](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Pages), matches left-hand pages.
[:link](https://developer.mozilla.org/en-US/docs/Web/CSS/:link) | Matches unvisited links.
`:local-link` | Matches links pointing to pages that are in the same site as the current document.
[:is](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) | Matches any of the selectors in the selector list that is passed in.
[:not](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) | Matches things not matched by slectors that are passed in as a value to this selector.
[:nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) | Matches elements from a list of siblings - the siblings are matched by a formula of the form *an+b* (e.g. 2n + 1 would match elements 1, 3, 5, 7, etc. All the odd ones.).
[:nth-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type) | Matches elements from a list of siblings that are of a certain type (e.g. `<p>` elements) - the siblings are matched by a formula of the form *an+b* (e.g. 2n + 1 would match that type of element, numbers 1, 3, 5, 7, etc. All the odd ones.).
[:nth-last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child) | Matches elements from a list of siblings, counting backwards from the end. The siblings are matched by a formula of the form *an+b* (e.g. 2n + 1 would match the last element in the sequence, then two elements before that, then two elements before that, etc. All the odd onces, counting from the end.).
[:nth-last-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type) | Matches elements from a list of siblings that are ofa  certain type (e.g. `<p>` elements), counting backwards from the end. The siblings are matched by a formula of the form *an+b* (e.g. 2n + 1 would match the last element of that type in the sequence, then two elements before that, then two elements before that, etc. All the odd onces, counting from the end.).
[:only-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child) | Matches an element that has no siblings.
[:only-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type) | Matches an element that is the only one of its type among its siblings.
[:optional](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional) | Matches form elements that are not required.
[:out-of-range](https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range) | Matches an element wiht a range when its value is out of range.
`:past` | Matches the elements before the current element.
[:placeholder-shown](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown) | Matches an input element that is showing placeholder text.
`:playing` | Matches an element representing an audio, video, or similar resource that is capable of being "played" or "paused", when that element is "playing".
`:paused` | Matches an element representing an audio, video, or similar resource that is capable of being "played" or "paused", when that element is "paused".
[:read-only](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only) | Matches an element if it is not user-alterable.
[:read-write](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write) | Matches an element if it is user-alterable.
[:required](https://developer.mozilla.org/en-US/docs/Web/CSS/:required) | Matches form elements that are required.
[:right](https://developer.mozilla.org/en-US/docs/Web/CSS/:right) | In [Paged Media](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Pages), matches right-hand pages.
[:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) | Matches an element that is the root of the document.
[:scope](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope) | Matches any element that is a scope element.
[:valid](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid) | Matches an element such as an `<input>` element, in a valid state.
[:target](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) | Matches an element if it is the target of the current URL (i.e. if it has an Id matching the current [URL fragment](https://en.wikipedia.org/wiki/Fragment_identifier)).
[:visited](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited) | Matches visited links.

### Pseudo Elements
[Back to Top](#selectors)

Selector | Description
---------|------------
[::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) | Matches a stylable element appearing after the originating element's actual content.
[::before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) | Matches a stylable element appearing before the originating element's actual content.
[::first-letter](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter) | Matches the first letter of an element.
[::first-line](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line) | Matches the first line of the containing element.
[::grammar-error](https://developer.mozilla.org/en-US/docs/Web/CSS/::grammar-error) | Matches a portion of the document containing a grammar error as flagged by the browser.
[::marker](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker) | Matches the marker box of a list item, which typically contains a bullet or number.
[::selection](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection) | Matches the portion of the document that has been selected.
[::spelling-error](https://developer.mozilla.org/en-US/docs/Web/CSS/::spelling-error) | Matches a portion of the document containing a spelling error as flagged by the browser.

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
