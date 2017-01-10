
/**
 * Retriever.js
 * Author : Bloodbee (Mathieu Dufour)
 * What does it do ? : This library display a popup/modal when the mouse of your visitor leave your website.
 * It's useful to convert visitor into customers, by offering them a redeem coupon, or make them click on a new item link
 **/

;(function () {
    'use strict';

    var that;


    function Retriever (config) {

        that = this;

        // Support instantiation without the `new` keyword.
        if (typeof this === 'undefined' || Object.getPrototypeOf(this) !== Retriever.prototype) {
          return new Retriever(config);
        }

        return that;

    };

    /**
    * Configuration
    * -------------
    * This object signature can be passed directly to the Retriever constructor,
    * or as the second argument of the `retrieve()` method.
    */

    Retriever.prototype.defaults = {
        // `<html>` is the default container.
        container: window.document.documentElement,

        // the popup displayed when the cursor leave the container
        popup: true,
        popupStyle: {
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center',
            'position': 'absolute',
            'width' : '400px',
            'height': '250px',
            'background-color': 'white',
            'border': '1px solid black',
        },

        closeButton: true,
        closeStyle: {
            'background-color': 'transparent',
            'color': 'red',
            'font-size': '15px',
            'font-weight': '400',
        },

        contentStyle: {
            'text-align': 'center',
            'font-weight': '500',
            'font-size': '20px'
        },

        link: "http://www.pykto.fr",
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

        // control mobile popup
        mobile: true,


    };


    Retriever.prototype.retrieve = function(config) {
        var conf = {};
        // initialize our retrieve
        if (config === undefined || config === null) {
            conf = this.defaults;
        } else {
            // merge configs
            Object.assign(conf, config, this.defaults);
        }

        console.log(conf);

        var container = conf.container; // by default it's the body

        var popupStyle = '';
        for (var prop in conf.popupStyle) {
            if (conf.popupStyle.hasOwnProperty(prop))
                popupStyle += prop+':'+conf.popupStyle[prop]+';';
        }

        var closeStyle = '';
        for (var prop in conf.closeStyle) {
            if (conf.closeStyle.hasOwnProperty(prop))
                closeStyle += prop+':'+conf.closeStyle[prop]+';';
        }

        var contentStyle = '';
        for (var prop in conf.contentStyle) {
            if (conf.contentStyle.hasOwnProperty(prop))
                contentStyle += prop+':'+conf.contentStyle[prop]+';';
        }

        var linkStyle = '';
        for (var prop in conf.linkStyle) {
            if (conf.linkStyle.hasOwnProperty(prop))
                linkStyle += prop+':'+conf.linkStyle[prop]+';';
        }

        var link = conf.link;

        // Now on mouseleave container event

        container.onmouseout = function() {
            // remove old popup
            var oldPopup = document.getElementById('retrieve-popup');
            if (oldPopup)
                document.body.removeChild(oldPopup);

            // create the elements
            var retrievePopup = document.createElement("DIV");
            var retrieveContent = document.createElement("P");
            var retrieveContentText = document.createTextNode("You are sure you want to go away ? We got a -25% redeem code for all website, just for you !");
            var retrieveLinkDiv = document.createElement("SPAN");
            var retrieveLink = document.createElement("A");

            // set attributes and styles and whatever
            retrievePopup.setAttribute('id', 'retrieve-popup');
            retrievePopup.style.cssText = popupStyle;

            retrieveContent.setAttribute('id', 'retrieve-content');
            retrieveContent.style.cssText = contentStyle;

            retrieveLinkDiv.setAttribute('id', 'retrieve-link');
            retrieveLinkDiv.style.cssText = linkStyle;

            retrieveLink.setAttribute('href', link);
            retrieveLink.textContent = 'Click here !';

            // construct the popup element
            retrieveLinkDiv.appendChild(retrieveLink);
            retrieveContent.appendChild(retrieveContentText);

            if (conf.closeButton) {
                var retrieveClose = document.createElement("BUTTON");

                retrieveClose.setAttribute('id', 'retrieve-close');
                retrieveClose.textContent = 'close';
                retrieveClose.style.cssText = closeStyle;

                retrievePopup.appendChild(retrieveClose);

                retrieveClose.onclick = function() {
                    document.body.removeChild(retrievePopup);
                };
            }

            retrievePopup.appendChild(retrieveContent);
            retrievePopup.appendChild(retrieveLinkDiv);


            // add it to body
            document.body.appendChild(retrievePopup);

        };

    };

    // export our library
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function () {
          return Retriever;
        })
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Retriever;
    } else {
        window.Retriever = Retriever;
    }

}())
