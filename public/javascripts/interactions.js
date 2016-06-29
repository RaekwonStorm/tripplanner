

$(document).ready(function () {

  var buttonCount = 1;

  $('.active').data({
    hotel: null,
    restaurants: [],
    activities: []
  });

  $('#day-choice').on('click', '.badge', function () {
    $('.badge').not(this).removeClass('active');
    $(this).toggleClass('active');
    $('.row ul li').remove();

    if ($(this).data().hotel) {
      $('#hotel-bottom ul').append('<li><p><button class="glyphicon glyphicon-remove"></button>' + $(this).data().hotel.name + '</p></li>');

      $('.glyphicon-remove').on('click', function () {
        $(this).parent().remove();
        $('.active').data().hotel = null;
      });
    }


    var rstArr = $(this).data().restaurants;


    if (rstArr.length) {

      for (var i = 0; i < rstArr.length; i++) {
        $('#restaurants-bottom ul').append('<li><p><button class="glyphicon glyphicon-remove"></button>' + rstArr[i].name + '</p></li>');

        $('.glyphicon-remove').on('click', function () {
          $(this).parent().remove();
          var idx2Rmv = $('.active').data().restaurants.findIndex(function (e) {
            return e.name === $(this).parent().text();
          });
          $('.active').data().restaurants.splice(idx2Rmv, 1);
        });
      }
    }

    var actArr = $(this).data().activities;

    if (actArr.length) {

      for (var i = 0; i < actArr.length; i++) {
        $('#activities-bottom ul').append('<li><p><button class="glyphicon glyphicon-remove"></button>' + actArr[i].name + '</p></li>');
      }
    }

    $('.glyphicon-remove').on('click', function () {
      $(this).parent().remove();
      var idx2Rmv = $('.active').data().activities.findIndex(function (e) {
        return e.name === $(this).parent().text();
      });
      $('.active').data().activities.splice(idx2Rmv, 1);
    });



  });

  for (var i = 0; i < Activities.length; i++) {
    $('.actMenu').append('<li>' + Activities[i].name + '</li>');
  }

  for (var i = 0; i < Restaurants.length; i++) {
    $('.restMenu').append('<li>' + Restaurants[i].name + '</li>');
  }

  for (var i = 0; i < Hotels.length; i++) {
    $('.hotMenu').append('<li>' + Hotels[i].name + '</li>');
  }

  $('.hotMenu').on('click', 'li', function () {
    if (!$('#hotel-bottom ul').children().length) {
      $('#hotel-bottom ul').append('<li><p><button class="glyphicon glyphicon-remove"></button>' + $(this).text() + '</p></li>');

      var data2Add;

      for (var i = 0; i < Hotels.length; i++) {
        if (Hotels[i].name === $(this).text()) data2Add = Hotels[i];
      }

      $(this).data(data2Add);

      $('.active').data().hotel = $(this).data();

      $('.glyphicon-remove').on('click', function () {
        $(this).parent().remove();
        $('.active').data().hotel = null;
      });
    }
    else {
      $('#hotel-bottom ul li').replaceWith('<li><p><button class="glyphicon glyphicon-remove"></button>' + $(this).text() + '</p></li>');

      var data2Add;

      for (var i = 0; i < Hotels.length; i++) {
        if (Hotels[i].name === $(this).text()) data2Add = Hotels[i];
      }

      $(this).data(data2Add);

      $('.active').data().hotel = $(this).data();

      $('.glyphicon-remove').on('click', function () {
        $(this).parent().remove();
        $('.active').data().hotel = null;
      });
    }
  });

  $('.restMenu').on('click', 'li', function () {

      var data2Add;

      for (var i = 0; i < Restaurants.length; i++) {
        if (Restaurants[i].name === $(this).text()) data2Add = Restaurants[i];
      }

      $(this).data(data2Add);

      $('.active').data().restaurants.push($(this).data());

      var restLength = $('.active').data().restaurants.length;

      var restaurant = $('.active').data().restaurants[restLength - 1].name;


      $('#restaurants-bottom ul').append('<li><p><button class="glyphicon glyphicon-remove"></button>' + restaurant + '</p></li>');


      $('.glyphicon-remove').on('click', function () {
        $(this).parent().remove();
        var idx2Rmv = $('.active').data().restaurants.findIndex(function (e) {
          return e.name === $(this).parent().text();
        });
        $('.active').data().restaurants.splice(idx2Rmv, 1);
      });

  });

  $('.actMenu').on('click', 'li', function () {
      $('#activities-bottom ul').append('<li><p><button class="glyphicon glyphicon-remove"></button>' + $(this).text() + '</p></li>');

      var data2Add;

      for (var i = 0; i < Activities.length; i++) {
        if (Activities[i].name === $(this).text()) data2Add = Activities[i];
      }

      $(this).data(data2Add);

      $('.active').data().activities.push($(this).data());

      $('.glyphicon-remove').on('click', function () {
        $(this).parent().remove();
        var idx2Rmv = $('.active').data().activities.findIndex(function (e) {
          return e.name === $(this).parent().text();
        });
        $('.active').data().activities.splice(idx2Rmv, 1);
      });
  });

  $('.adder').on('click', function () {
    buttonCount++;

    $(this).before('<button class="badge">'+ buttonCount + '</button>');

    $('#day-choice button:last-child').prev().data({
    hotel: null,
    restaurants: [],
    activities: []
    });
  });
});
