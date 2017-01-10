





;(function () {
    'use strict';

    var $ = require("jquery");

    var that;


    function Retriever (config) {

        that = this;

        // Support instantiation without the `new` keyword.
        if (typeof this === 'undefined' || Object.getPrototypeOf(this) !== ScrollReveal.prototype) {
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
        // `<html>` is the default reveal container. You can pass either:
        // DOM Node, e.g. document.querySelector('.fooContainer')
        // Selector, e.g. '.fooContainer'
        container: window.document.documentElement,

        // the popup displayed when the cursor leave the container
        popup: true,
        popupStyle : {
            width : '100px',
            height: '100px',
            background-color: 'red',
        },

        closeButton: true,

        link: "http://www.pykto.fr",
        linkStyle : {
            padding: '5px',
            background-color: 'white',
            color: 'black'
        },

        // control mobile popup
        mobile: true,


    };


    Retriever.prototype.retrieve = function(target, config) {
        var container = window.document.documentElement; // by default it's the body

        // initialize our retrieve
        if (config === undefined || config === null) {
            config = {};
        } else {
            if (target === undefined || target === null) {
                if (config.container) container = config.container;
            } else {
                container = target;
            }
        }

        // Now on mouseleave container event

        $(container).mouseout(function() {
            console.log('coucou');
        });

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
