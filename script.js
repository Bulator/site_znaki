$('.menu-btn').on('click', function() {
    $('.menu').slideToggle();
});

$('.menu-btn').on('click', function() { $(this).toggleClass('active') })

function show(state)
	{
	document.getElementById('window').style.display = state;	
	document.getElementById('gray').style.display = state; 		
	}	

$('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    prevArrow: '<button class="slick-arrow_portfolio slick-arrow_portfolio_prev"><i class="fa fa-chevron-left portfolio-arrow"></i><button/>',
    nextArrow: '<button class="slick-arrow_portfolio slick-arrow_portfolio_next"><i class="fa fa-chevron-right portfolio-arrow"></i><button/>',
    responsive: [
      {
        breakpoint: 1018,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  $('.clients-slider').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-arrow_clients slick-arrow_clients_prev"><i class="fa fa-chevron-left clients-arrow"></i><button/>',
    nextArrow: '<button class="slick-arrow_clients slick-arrow_clients_next"><i class="fa fa-chevron-right clients-arrow"></i><button/>',
    dots: false,
    responsive: [
      {
        breakpoint: 1018,
        settings: {
          arrows: false
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $(document).ready(function() {
    $('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
      if (document.form.name.value == '' || document.form.phone.value == '' ) {
        valid = false;
        return valid;
      }
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {
        alert('Спасибо за заявку! Мы обязательно вам ответим.')
        $(this).find('input').val('');
        $('#form').trigger('reset');
      });
      return false;
    });
  });

  $(document).ready(function() {
    $('#form_2').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
      if (document.form_2.name_2.value == '' || document.form_2.phone_2.value == '' ) {
        valid = false;
        return valid;
      }
      $.ajax({
        type: "POST",
        url: "mail_2.php",
        data: $(this).serialize()
      }).done(function() {
        alert('yoy')
        $(this).find('input').val('');
        $('#form_2').trigger('reset');
      });
      return false;
    });
  });