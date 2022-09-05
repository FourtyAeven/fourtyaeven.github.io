var $nav_li = $('.resume_right .resume_right_info .nav li')
var $resume_left_info = $('.resume_left_info')
var $resume_right = $('.resume_right')
var $resume_left = $('.resume_left')

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
            // "height":'0'
            // 'margin-left':'-50%',
        })
        setTimeout(() => {
            $resume_left.css({
                'transform': "translateY(0%)",
            })
            $resume_right.css({
                'opacity':'1',
                'width':'50%',
                // 'height':'100%',
                'transform': "translate(0%)",
                // 'margin-left':'0%',
            })
        }, 600);
    }else{
        $resume_left.css({
            'transform': "translateY(-100%)",
        })
        $resume_right.css({
            'opacity':'0',
            'margin-left':'-20%',
            'width':'30%',
        })
        setTimeout(function() {
            $resume_left.css({
                'display':'none'
            })
            $resume_right.css({
                'margin-left':'0%',
                'width':'30%',
                'opacity':'1',
            })
        }, 600);
    }

    // $resume_right.css({
    //     'opacity':'0',
    //     'margin-left':'-20%',
    //     'width':'30%',
    // })
    // $resume_left.css({
    //     'transform': "translateY(-100%)",
    // })
    // id = setTimeout(function() {
    //     $resume_left.css({
    //         'display':'none'
    //     })
    //     $resume_right.css({
    //         'margin-left':'0%',
    //         'width':'30%',
    //         'opacity':'1',
    //     })
    // }, 600);
})
