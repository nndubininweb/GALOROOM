$(document).ready(function(){

    // Для таблиц без th
    $('#content table.user tr:first').find('td').addClass('first_tr');
    
    // Автоматическая вместимость в контент
    var w_right = $('#center #right').width();
    var cat_m = $('#center #right .catalogue .matrix').width();
    var num_block = w_right / cat_m;
    var nums = Math.floor(num_block);
    $('#content .catalogue .matrix').each(function(index) {
        if ((index+1)%nums == 0) {
            $(this).css('margin-right','0');
        }
    })
    
    // Открытие меню второго уровня
    $('.nav ul li').hover(function(){
        $(this).addClass('active');
        $(this).find('ul').css('display','block');
    },function(){
        $(this).removeClass('active');
        $(this).find('ul').css('display','none');   
    }); 
    
    if($('#slider .banner').length > 0){
        var h3 = $('#slider .text_block h3').height();
        var p = $('#slider .text_block').find('p:first').height();
        var pAddress = $('#slider .text_block p.address').height();
        var pPhone = $('#slider .text_block p.phone').height();
        var all = h3+p+pAddress+pPhone;
        if(all > 230){
            $('#slider .text_block').css('height','224px');
        }
    }
    
//  alert(h3+p+pAddress+pPhone+140);
    
    // Выбранный файл для кастомизированного input file
    $('.file_type').change(function(){
        $('.file_type').each(function() {
            var name = this.value;
            reWin = /.*\\(.*)/;
            var fileTitle = name.replace(reWin, "$1");
            reUnix = /.*\/(.*)/;
            fileTitle = fileTitle.replace(reUnix, "$1");
        $(this).parent().parent().parent().find('.name_file').html(fileTitle);
        });
    });
    
    // Инициализация prettyPhoto
    $("a[rel^='prettyPhoto']").prettyPhoto({
        theme: 'facebook',
        overlay_gallery: false
    });
    
    // раскрывающиеся блоки 
    $('a.more').click(function(){
        var index = $('a.more').index(this);
        
        /* Открытие только одной вакансии
        var nextBlock = $(this).next('div.more');
        if(nextBlock.css('display') != 'block'){
            $('div.more').slideUp();
            $('div.more').eq(index).slideToggle('fast');
        }*/

        $('div.more').eq(index).slideToggle('fast');
        return false;
    });
    
    if($('.box_skitter_large').length > 0){
        $('.box_skitter_large').skitter({dots: true,label: false});
    }
    if($('.clearOnFocus').length > 0){
        $('.clearOnFocus').placeholder('Поиск по сайту', '#454545');
    }
    
    // Форматирование столбцов с ценой в корзине
    formatPriceColumn('js-price');
    formatPriceColumn('js-summa');
});