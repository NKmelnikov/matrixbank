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
	$('.wrapper__article article.'+i +' h2').text(item.title);
	$('.wrapper__article article.'+i +' p').html(item.shortText);
	$('.wrapper__article article.'+i +'.read p').html(item.longText);

});

$('.wrapper article').click(function () {
	$(this).toggleClass('read');

	blog.forEach(function(item, i, arr) {
		$('.wrapper__article article.'+i +' p').html(item.shortText);
		$('.wrapper__article article.'+i +'.read p').html(item.longText);
	});

	$('.arrow2').show();
	$('.blog').css('color','white');
	$('.panel .article').text($(this).find('h2').text());

	if($('article').hasClass('read')){
		$('.panel .article').show();
		$('.panel .arrow2').show();
	} else {
		$('.panel .article').hide();
		$('.panel .arrow2').hide();
	}

});

// $('.tab-sector').each(function(){
// 	console.log($(this));
// });
// $('.tab-sector').click(function () {
// 	console.log($(this));
// 	$(this).children('a').trigger('click');
// });
