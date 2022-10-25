var $nav_li = $('.resume_right .resume_right_info .nav li');
var $resume_left_info = $('.resume_left_info');
var $resume_right = $('.resume_right');
var $resume_left = $('.resume_left');
var $demo = $('.demo');
var $demo_a = $('.demo a');
var $demo_a_web = $('.demo .web');
var $demo_a_H5C3 = $('.demo .H5C3');
var $demo_a_JS = $('.demo .JS');
var $demo_a_Vue = $('.demo .Vue');
var $nav_span = $('.demo_nav span');

$($nav_li[0]).addClass('active').siblings().removeClass('active');
$nav_li.click(function (e) {
    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).text() === '主页') {
        $resume_left.css({
            'display': 'flex',
            'transform': "translateY(-100%)",
        });
        $resume_right.css({
            'opacity': '0',
            'width': '50%',
        });
        $demo.css({
            'opacity': '0',
            'display': 'none',
        });
        $demo_a.css({
            'display': 'none',
        });
        setTimeout(() => {
            $resume_left.css({
                'transform': "translateY(0%)",
            });
            $resume_right.css({
                'opacity': '1',
                'width': '50%',
                'transform': "translate(0%)",
            });
        }, 600);
    } else {
        $resume_left.css({
            'transform': "translateY(-100%)",
        });
        $resume_right.css({
            'opacity': '0',
            'width': '20%',
        });
        setTimeout(function () {
            $resume_left.css({
                'display': 'none'
            });
            $resume_right.css({
                'margin-left': '0%',
                'width': '20%',
                'opacity': '1',
            });
            $demo.css({
                'display': 'block',
            });
            $demo_a.css({
                'display': 'block',
            });
        }, 600);
        setTimeout(() => {
            $demo.css({
                'opacity': '1',
            });
        }, 1000);
    }
});


$($nav_span[0]).addClass('active');
$demo_a_web.show().siblings().hide();
$nav_span.click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).text() === 'H5&C3') {
        $demo_a_H5C3.show().siblings().hide();
    }
    if ($(this).text() === '页面') {
        $demo_a_web.show().siblings().hide();
    }
    if ($(this).text() === 'JS案例') {
        $demo_a_JS.show().siblings().hide();
    }
    if ($(this).text() === 'Vue') {
        $demo_a_Vue.show().siblings().hide();
    }
});

