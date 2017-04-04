function addToCart(form) { // Добавление товара в корзину на Ajax
    var item  = $(form).find('input[name=cart_item]').val();
    var value = $(form).find('input[name=value]').val();
    $.get(
        '/include/ajax/cart.php', 
        {'item':item,'value':value},
        function (data) {
            var newData = data.split('|');
            $('#cart_num').text(newData[0]);
            $('#cart_sum').text(newData[1]);
            if (parseInt(value) > 0) {
                var offset = $(form).offset();
                $('body').append('<div id="cart_informer" style="left:'+(offset.left-50)+'px;top:'+(offset.top-20)+'px;"><h3>Товар добавлен в корзину!</h3></div>');
                setTimeout(function() {
                    $('#cart_informer').fadeOut('fast',  function() {
                        $(this).remove();
                    });
                },2000);
            }
        }
    );
    return false;
}

function checkSideForm(form) { // Проверка заполненности боковой формы
    var fields = new Array('r_name','r_phone','r_text'), submit = true;
    for (var x=0;x<fields.length;x++) { if (form.elements[fields[x]].value == '') { submit = false; }}
    if (!submit) {
        alert('Форма не отправлена!\n\nПохоже, некоторые обязательные поля не заполнены.\nПроверьте, пожалуйста.');
    }
    return submit;
}

function formatPriceColumn(class_td) { // Форматирование колонки с числами
    var max_width = 0, width = 0, shift = 0;
    var cell_width = $('table').find('td.'+class_td).innerWidth();
    $('table').find('td.'+class_td).each(function() {
        $(this).css({'text-align':'right','padding':'0'});
        width = $(this).wrapInner('<span>').find('span').width();
        if (width > max_width) {
            max_width = width;
        }
    })
    shift = (cell_width-max_width)/2;
    $('table').find('td.'+class_td).each(function() {
        $(this).find('span').css('padding-right',shift);
    })
}