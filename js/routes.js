function clearPanel(){

}

Path.map("#/").to(function(){

  $('body').css('background','url("img/bg.png")');
  o.S.two.hide();
  o.S.three.hide();
  o.S.four.hide();
  o.S.five.hide();
  o.S.six.hide();
  o.S.seven.hide();

  o.S.one.show();

  o.h.l.removeClass('active');
  $( '.link-box .home').addClass('active');
}).enter(clearPanel);

Path.map("#/team").to(function(){

  $('body').css('background', 'url("img/bg.png")');

  o.S.one.hide();
  o.S.three.hide();
  o.S.four.hide();
  o.S.five.hide();
  o.S.six.hide();
  o.S.seven.hide();

  o.S.two.css('display','flex');

  o.h.l.removeClass('active');
  $( '.link-box .team').addClass('active');

}).enter(clearPanel);

Path.map("#/services").to(function(){

  $('body').css('background','url("img/bg.png")');


  o.S.one.hide();
  o.S.two.hide();
  o.S.four.hide();
  o.S.five.hide();
  o.S.six.hide();
  o.S.seven.hide();

  o.S.three.css('display','flex');

  o.h.l.removeClass('active');
  $( '.link-box .services').addClass('active');

}).enter(clearPanel);

Path.map("#/subsidiaries").to(function(){

  $('body').css('background','url("img/bg.png")');


  o.S.one.hide();
  o.S.two.hide();
  o.S.three.hide();
  o.S.five.hide();
  o.S.six.hide();
  o.S.seven.hide();

  o.S.four.css('display','flex');

  o.h.l.removeClass('active');
  $( '.link-box .subsidiaries').addClass('active');

}).enter(clearPanel);

Path.map("#/clients").to(function(){

  $('body').css('background', 'url("img/bg.png")');


  o.S.one.hide();
  o.S.two.hide();
  o.S.three.hide();
  o.S.four.hide();
  o.S.six.hide();
  o.S.seven.hide();

  o.S.five.css('display','flex');

  o.h.l.removeClass('active');
  $( '.link-box .clients').addClass('active');

}).enter(clearPanel);

Path.map("#/blog").to(function(){

  $('body').css('background','#131212');


  o.S.one.hide();
  o.S.two.hide();
  o.S.three.hide();
  o.S.four.hide();
  o.S.five.hide();
  o.S.seven.hide();

  o.S.six.show();

  o.h.l.removeClass('active');
  $( '.link-box .blog').addClass('active');

}).enter(clearPanel);

Path.map("#/contacts").to(function(){

  $('body').css('background', '#131212');

	$('body').css('background', 'url("img/bg.png")');

  o.S.one.hide();
  o.S.two.hide();
  o.S.three.hide();
  o.S.four.hide();
  o.S.five.hide();
  o.S.six.hide();

  o.S.seven.css('display','flex');

  o.h.l.removeClass('active');
  $( '.link-box .contacts').addClass('active');

}).enter(clearPanel);

Path.root("#/");

Path.listen();