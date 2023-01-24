            jQuery.ajaxPrefilter(function (options) {
                if (options.crossDomain && jQuery.support.cors) {
                   options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
           }
           });