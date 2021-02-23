/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {
    
    $('.s1').find('.i-img').addClass('show');

    $('.answer ul li').on('click', function() {
        let ans = $(this).attr('class');
        
        $('.answer ul li').each(function() {
            $(this).find('img').attr('src', 'img/popo.png');
        })

        if(ans) {
            $(this).find('img').attr('src', 'img/accepted.svg');
        } else {
            $(this).find('img').attr('src', 'img/denied.svg'); 
        }
    })

    $('.qa-btn').on('click', function(){
        let href = $(this).find('a').attr('data-href');
        if($('[src$="accepted.svg"]').length > 0) {
            $(this).find('a').attr('href', href);
        }
    });
});
