'use strict';

$('.select').each(function() {
  const _this = $(this);
  const selectOption = _this.find('option');
  const selectOptionLength = selectOption.length;
  const selectedOption = selectOption.filter(':selected');
  const duration = 450; // длительность анимации

  _this.hide();
  _this.wrap('<div class="select"></div>');

  $('<div>', {
    class: 'new-select',
    text: _this.children('option:disabled').text(),
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');

  $('<div>', {
    class: 'new-select__list'
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');

  for (let i = 1; i < selectOptionLength; i++) {
    $('<div>', {
      class: 'new-select__item',
      html: $('<span>', {
        text: selectOption.eq(i).text()
      }),
    })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');

  selectList.slideUp(0);

  selectHead.on('click', function() {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      selectList.slideDown(duration);

      selectItem.on('click', function() {
        const chooseItem = $(this).data('value');

        $('select').val(chooseItem).attr('selected', 'selected');
        selectHead.text($(this).find('span').text());

        selectList.slideUp(duration);
        selectHead.removeClass('on');
      });
    } else {
      $(this).removeClass('on');
      selectList.slideUp(duration);
    }
  });
});

$(document).ready(function() {
  // eslint-disable-next-line no-undef
  $('#menu').on('click', 'a', function(event) {
    event.preventDefault();

    const id = $(this).attr('href');
    const top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function() {
  $('#menu__foot').on('click','a', function(event) {
    event.preventDefault();

    const id = $(this).attr('href');
    const top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function() {
  $('#footer').on('click','a', function(event) {
    event.preventDefault();

    const id = $(this).attr('href');
    const top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function() {
  $('#buy').on('click', function(event) {
    event.preventDefault();

    const id = $('#contact');
    const top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
});
