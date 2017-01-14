
[![Build Status](https://travis-ci.org/bloodbee/retriever.js.svg?branch=master)](https://travis-ci.org/bloodbee/retriever.js)

Turn your lost visitors in new customers with this simple javascript library.


## Install

Copy src/retriever.js into your /js directory.

Add it to your html file :

```
<script src='/js/retriever.js'></script>
```

And that's done !

## Usage

Instanciate the Retriever class and use the .retrieve() method :

```js
var Retriever = new Retriever();

Retriever.retrieve();
```

## API

### new Retriever()

Instanciate the Retriever class.


### Retriever.setConfig(config)

Change retriever's config, you can specify the belowed keys :

##### container

Type: `DomELEMENT`<br>
Default: `window.document.documentElement`

The container to use for the retrieve method.

##### popup

Type: `boolean`<br>
Default: `true`

Specify if you want to display or not the popup.

##### popupStyle

Type: `Object`<br>
Default: ``

Define the style of the popup element. You can put in it what you want and looks like css.

##### closeButton

Type: `boolean`<br>
Default: `true`

Specify if you want to display a Close Button into your popup.

##### closeStyle

Type: `Object`

Define the style of the close button element. You can put in it what you want and looks like css.

##### content

Type: `string`<br>
Default : `Thanks for using retriever.js !`

This is the text that will appear in your popup.

##### contentStyle

Type: `Object`

Define the style of the content element. You can put in it what you want and looks like css.

##### linkUrl

Type: `string`<br>
Default: ``

The url to where redirect the visitor if they click on the link.

##### link

Type: `string`<br>
Default: `Click here`

The text used for your link.

##### linkStyle

Type: `Object`

Define the style of the link element. You can put in it what you want and looks like css.

##### mobile

Type: `boolean`<br>
Default: `true`

Decide if you want the popup to be used on mobile or not.


### Retriever.popup()

Display the popup.


### Retriever.close()

Close the popup.

### Retriever.retrieve()

Listen to the mouseleave event on the default settings container, and display the popup everytime this event happens.


## Some examples


## License

MIT
