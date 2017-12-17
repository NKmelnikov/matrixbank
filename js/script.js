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
    lb:$('.link-box'),
	  b:$('.burger-box a'),
	  aH2:$('.wrapper__article article h2'),
	  ap:$('.wrapper__article article p')
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

o.h.l.click(function () {
	o.h.lb.toggleClass('active');
});

o.h.b.click(function () {
	o.h.lb.toggleClass('active');
});


if($('article').hasClass('read')){
	$('.panel .article').show();
	$('.panel .arrow2').show();
} else {
	$('.panel .article').hide();
	$('.panel .arrow2').hide();
}

blog.forEach(function(item, i, arr) {
$('.wrapper__article').append(" <article class="+ i +">\n" +
	"\t<h2 class=\"title\"></h2>\n" +
	"\t<p></p>\n" +
	"\t</article> ");
	$('.wrapper__article article.'+i+' h2').text(item.title);
	$('.wrapper__article article.'+i+' p').html(item.shortText);
	$('.wrapper__article article.'+i+'.read p').html(item.longText);

});

$('.wrapper article').click(function () {

	$(this).toggleClass('read');


  // $('.wrapper article').each(function () {
  //   if(!$('.wrapper article').hasClass('read')){
  //     $(this).hide();
  //   }
  // });
	blog.forEach(function(item, i, arr) {
		$('.wrapper__article article.'+i +' p').html(item.shortText);
		$('.wrapper__article article.'+i +'.read p').html(item.longText);
	});

  $('article').show();

  if($('article.0').hasClass('read') && !$('article.1').hasClass('read')){
    $('article.1').hide();
  } else if($('article.1').hasClass('read') && !$('article.0').hasClass('read')){
    $('article.0').hide();
  }

	$('.arrow2').show();
	$('.blog').css('color','white');
	$('.panel .article').text($(this).find('h2').text());

	if($('article').hasClass('read')){
		$('.panel .article').show();
		$('.panel .arrow2').show();
    $('.panel .blog').css('color','white');
	} else {
		$('.panel .article').hide();
		$('.panel .arrow2').hide();
    $('.panel .blog').css('color','#535353');
	}

});


$(window).on("load", function() {
  $('.cloak').fadeOut( "slow");
});

window.addEventListener("orientationchange", function() {
  $('.cloak').fadeOut( "slow");
}, false);

window.onresize = function(event) {
  $('.cloak').fadeOut( "slow");
};