

$(document).ready(function () {

  var buttonCount = 1;

  var dayData = {
    hotel: null,
    restaurants: [],
    activities: []
  };

  $('.badge').click('click', function () {
    $(this).toggleClass('active');
  });

  for (var i = 0; i < activities.length; i++) {
    $('.actMenu').append('<li>' + activities[i].name + '</li>');
  }

  for (var i = 0; i < restaurants.length; i++) {
    $('.restMenu').append('<li>' + restaurants[i].name + '</li>');
  }

  for (var i = 0; i < hotels.length; i++) {
    $('.hotMenu').append('<li>' + hotels[i].name + '</li>');
  }

  $('.hotMenu').on('click', 'li', function () {
    if (!$('#hotel-bottom ul').children().length) {
      $('#hotel-bottom ul').append('<li><p><button class="glyphicon glyphicon-remove"></button>' + $(this).text() + '</p></li>');
      $('.glyphicon-remove').on('click', function () {
        $(this).parent().remove();
      });
    }
    else {
      $('#hotel-bottom ul li').replaceWith('<li><p><button class="glyphicon glyphicon-remove"></button>' + $(this).text() + '</p></li>');
      $('.glyphicon-remove').on('click', function () {
        $(this).parent().remove();
      });
    }
  });

  $('.restMenu').on('click', 'li', function () {
      $('#restaurants-bottom ul').append('<li><p><button class="glyphicon glyphicon-remove"></button>' + $(this).text() + '</p></li>');
      $('.glyphicon-remove').on('click', function () {
        $(this).parent().remove();
      });
  });

  $('.actMenu').on('click', 'li', function () {
      $('#activities-bottom ul').append('<li><p><button class="glyphicon glyphicon-remove"></button>' + $(this).text() + '</p></li>');
      $('.glyphicon-remove').on('click', function () {
        $(this).parent().remove();
      });
  });

  $('.adder').on('click', function () {
    buttonCount++;
    $(this).before('<button class="badge">'+ buttonCount + '</button>');
  });
});
