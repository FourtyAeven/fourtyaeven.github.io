var $nav_li = $('.resume_right .resume_right_info .nav li')
var $resume_left_info = $('.resume_left_info')
var $resume_right = $('.resume_right')
var $resume_left = $('.resume_left')
var $demo = $('.demo')
var $demo_a = $('.demo a')

$nav_li.click(function(e){
    $(this).addClass('active').siblings().removeClass('active')

    if ($(this).text() === '主页') {
        // console.log(11);
        $resume_left.css({
            'display':'flex',
            'transform': "translateY(-100%)",
        })
        $resume_right.css({
            'opacity':'0',
            'transform': "translate(10%)",
            'width':'50%',
        })
        $demo.css({
            'transform': "translate(100%)",
            'opacity':'0',
            'width':'40%',
        })
        $demo_a.css({
            'display':'none',
        })
        setTimeout(() => {
            $resume_left.css({
                'transform': "translateY(0%)",
            })
            $resume_right.css({
                'opacity':'1',
                'width':'50%',
                'transform': "translate(0%)",
            })
            $demo.css({
                'transform': "translate(0%)",
                'opacity':'0',
                'width':'0%',
                
            })
            $demo_a.css({
                'display':'inline',
            })
        }, 600);
    }else{
        $resume_left.css({
            'transform': "translateY(-100%)",
        })
        $resume_right.css({
            'opacity':'0',
            'margin-left':'-30%',
            'width':'20%',
        })
        $demo.css({
            'transform': "translate(100%)",
            'opacity':'0',
            'width':'80%',
        })
        setTimeout(function() {
            $resume_left.css({
                'display':'none'
            })
            $resume_right.css({
                'margin-left':'0%',
                'width':'20%',
                'opacity':'1',
            })
            $demo.css({
                'transform': "translate(0%)",
                'opacity':'1',
            })
        }, 600);
    }
})
