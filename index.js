var $nav_li = $('.resume_right .resume_right_info .nav li');
var $resume_left_info = $('.resume_left_info');
var $resume_right = $('.resume_right');
var $resume_left = $('.resume_left');
var $demo = $('.demo');
var $demo_a = $('.demo a');
var $demo_a_web = $('.demo .web');
var $demo_a_H5C3 = $('.demo .H5C3');
var $demo_a_JS = $('.demo .JS');
var $nav_span = $('.demo_nav span');

$($nav_li[0]).addClass('active').siblings().removeClass('active');
$nav_li.click(function (e) {
    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).text() === '主页') {
        // console.log(11);
        $resume_left.css({
            'display': 'flex',
            'transform': "translateY(-100%)",
        });
        $resume_right.css({
            'opacity': '0',
            'transform': "translate(10%)",
            'width': '50%',
        });
        $demo.css({
            'transform': "translate(100%)",
            'opacity': '0',
            'width': '40%',
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
            $demo.css({
                'transform': "translate(0%)",
                'opacity': '0',
                'width': '0%',

            });
            // $demo_a.css({
            //     'display':'block',
            // })
        }, 600);
    } else {
        $resume_left.css({
            'transform': "translateY(-100%)",
        });
        $resume_right.css({
            'opacity': '0',
            'margin-left': '-40%',
            'width': '20%',
        });
        $demo.css({
            'transform': "translate(100%)",
            'opacity': '0',
            'width': '80%',
        });
        $demo_a.css({
            'display': 'block',
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
                'transform': "translate(0%)",
                'opacity': '1',
            });
        }, 600);
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
});

