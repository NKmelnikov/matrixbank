function clearPanel(){
  // $('section').on('show', function() {
  //  $(this).animate({"margin-right": '+=200'});
  // });
  //
  // $('section').on('hide', function() {
  //   console.log($(this));
  // });
}

Path.map("#/").to(function(){

  $('body').css('background','url("/img/bg.png")');
  o.S.two.hide();
  o.S.one.show();

}).enter(clearPanel);

Path.map("#/team").to(function(){

  $('body').css('background','#131212');
  o.S.one.hide();
  o.S.two.css('display','flex');

}).enter(clearPanel);

Path.map("#/services").to(function(){
  alert("Comments!");
}).enter(clearPanel);

Path.map("#/subsidiaries").to(function(){
  alert("Posts!");
}).enter(clearPanel);

Path.map("#/clients").to(function(){
  alert("Posts!");
}).enter(clearPanel);

Path.map("#/blog").to(function(){
  alert("Posts!");
}).enter(clearPanel);

Path.map("#/contacts").to(function(){
  alert("Posts!");
}).enter(clearPanel);

Path.root("#/");

Path.listen();