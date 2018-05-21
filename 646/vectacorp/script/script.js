$(document).ready(function() {
    "use strict";
    alert('the page is ready!');
});
$('section h2, aside h2').css({'border': '1px solid black',
                               'color': '#CC1C0D',
                               'padding': '3px 0px 3px 20px',
                               'border-radius': '0px 5px 0px 5px',
                               'background-color': '#DFE3E6'
                               });
$('nav ul li').addClass("navigation");
$('.navigation').css({'border': '1px solid #929CA4',
                      'color': '#CC1C0D',
                      'padding': '3px 0 3px 20px',
                      'backgroundColor': '#DFE3E6'
                     });
$('section p').removeClass("vprospect vconvert vretain");
var chevy = $('aside p:last-child').html();
$('aside p:last-child').html(chevy+ '<br>Chevy Dealers Association');
$('aside p:first-of-type').wrap('<q></q>').css('fontStyle', 'italic');
$('section p:first-of-type b').replaceWith('<a href="http://www.vectacorp.com" target="_blank">Vecta Corporation</a>');
