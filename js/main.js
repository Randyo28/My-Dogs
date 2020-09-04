$(function(){

$('#myTab a').on('click', function (e) {
  $(this).tab('show');
});

$('.nelly-btn').on('click', function(){
  $('#nels').toggleClass('nelly-text');

  $(this).text($(this).text() == 'More Info' ? 'Less Info' : 'More Info');
});

$('.benji-btn').on('click', function(){
  $('#ben').toggleClass('benji-text');

  $(this).text($(this).text() == 'More Info' ? 'Less Info' : 'More Info');
});


});

ScrollReveal().reveal('.navbar-brand',{ duration: 3000, origin:'left', distance: '200px' });

ScrollReveal().reveal('#myTab',{ duration: 3000, origin:'right', distance: '200px', mobile: false });

ScrollReveal().reveal('#pills-about',{ duration: 2500, origin:'bottom', distance: '200px' });

ScrollReveal().reveal('.nelly-div',{ duration: 2500, origin:'right', distance: '100px' });

ScrollReveal().reveal('.benji-div',{ duration: 2500, origin:'left', distance: '100px' });

ScrollReveal().reveal('#pills-food', { duration: 2500, origin:'bottom', distance: '100px' });

ScrollReveal().reveal('#pills-grooming',{ duration: 2500, origin:'bottom', distance: '100px' });

ScrollReveal().reveal('.g-img1',{ duration: 2500, origin:'left', distance: '100px' });

ScrollReveal().reveal('.g-img2',{ duration: 2500, origin:'right', distance: '100px' });



// $('.nelly').on('click', function(){
//   $('.nelly .card-body').append('<h1> Nelly is Busa</h1>');
//   });
//
//   $('.nelly').on('click', function(){
//     $('.nelly').has('h1').off('click')
//   });
