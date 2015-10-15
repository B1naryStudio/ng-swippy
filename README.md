# ng-swippy
Angular directive for tinder-like card view. 
Live [Demo](http://b1narystudio.github.io/ng-swippy/)
![alt text](https://github.com/B1naryStudio/ng-swippy/blob/master/title.png "ng-swippy example")

## Installing
You can install it via npm
```shell
npm install ng-swippy
```
or via bower
```shell
bower install ng-swippy
```

## Loading

In your html code include ng-swippy.js and ngswippy.css

```html
<link rel="stylesheet" type="text/css" href="ngswippy.css">

<script src="ng-swippy.js"></script>
```

Then also need to require ngSwippy module as a dependency and ngTouch native Angular module.

```javascript
angular.module('myModule', ['ngTouch', 'ngSwippy'])
```

## Usage

In your html markup write

```html
<ng-swippy collection='itemsCollection' width='{{size.width}}px' height='{{size.height}}px' item-click='myCustomFunction' data='showinfo'collection-empty='swipeend' swipe-left='swipeLeft'  swipe-right='swipeRight' cards-number='2' label-ok='Cool' label-negative='Bad'></ng-swippy>
```
## Attributes

* **collection** - (required) Its value is collection of elements (users)
* **height** - (optional) Height of parent element with cards
* **width** - (optional) Width of parent element width cards
* **item-click** - (optional) Callback for handling click on the card
* **data** - (optional) Enables or disables displaying info (title, subtitle, current card number)
* **collection-empty**  - (optional) Callback for handling swiping out last element
* **swipe-left** - (optional) Callback for handling swipe to the left
* **swipe-right** - (optional) Callback for handling swipe to the left
* **cards-number** - (optional) Number of cards to load in the DOM. By default - 3.
* **label-ok** - (optional) Green label that describes current action
* **label-negative** - (optional) Red label that describes current action

## Collection structure

Your collection should have such structure:
#### Simple collection 
```javascript
$scope.itemsCollection = [{
	thumbnail: 'images/1.jpg',
	title: 'Clara Oswin Oswald',
	subtitle: 'clara@gmail.com'
}, {
	thumbnail: 'images/2.jpg',
	title: 'Emy Pond',
	subtitle: 'emy@gmail.com'
}]
```

## Changelog

### Current version 0.1.0 (2015-10-15)

##Created by [BogdanRusinka](https://github.com/BogdanRusinka) 

##Contributing
Feel free to open issues and send PRs. 

## License

The MIT License (MIT)

[![Binary Studio](http://www.binary-studio.com/wp-content/uploads/2014/11/logo.gif)](http://binary-studio.com)  
Copyright (c) 2015 Rusinka Bogdan bogdan.rusinka@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
