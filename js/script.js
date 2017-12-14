$( function() {
  $( "#tabs" ).tabs();
} );

var o = {
  S: { //sections
    one:$('#one'),
    two:$('#two'),
    three:$('#three'),
    four:$('#four'),
    five:$('#five'),
    six:$('#six'),
    seven:$('#seven')
  },
  h:{
    l:$( '.link-box a'),
    h:$( '.link-box .home')
  }
};

var hsh = window.location.hash;
var route = hsh.substring(2, hsh.length);

o.h.l.removeClass('active');

o.h.l.each(function(){

  if ($(this).hasClass(route)) {
    $(this).addClass('active');
  }

});