
[![Build Status](https://travis-ci.org/bloodbee/retriever.js.svg?branch=master)](https://travis-ci.org/bloodbee/retriever.js)

Turn your lost visitors in new customers with this simple javascript library.


## Install

Copy src/index.js into your /js directory.

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

##### blurred

Type: `boolean`<br>
Default: `true`

Decide if you want to add a bootstrap backdrop effect when the popup shows up.


### Retriever.popup()

Display the popup.


### Retriever.close()

Close the popup.

### Retriever.retrieve()

Listen to the mouseleave event on the default settings container, and display the popup everytime this event happens.


## Some examples


### 1)

```
var Retriever = new Retriever();

Retriever.setConfig({
    popupStyle: {
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'align-items': 'center',
        'position': 'absolute',
        'width' : '400px',
        'height': '250px',
        'background-color': 'white',
        'border': 'none',
    },
    closeStyle: {
        'background-color': 'transparent',
        'color': 'red',
        'border': 'none',
        'font-size': '15px',
        'font-weight': '400',
    },
    contentStyle: {
        'text-align': 'center',
        'font-weight': '500',
        'font-size': '20px',
        'padding-left': '30px',
        'padding-right': '30px'
    },
    linkStyle: {
        'padding': '5px',
        'background-color': 'black',
        'color': 'white',
        'width': '200px',
        'height': '50px',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'font-size': '18px',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
    },
    content : "Don't leave so fast ! You can use the redeem coupon RETRIEVER25 on all our website to gain 25% off.",
    linkUrl: "/usecoupon/retriever25",
    link: "Use my coupon",
});

Retriever.retrieve();
```

The result is :
https://github.com/bloodbee/retriever.js/blob/master/img/example-1.png


## License

MIT
