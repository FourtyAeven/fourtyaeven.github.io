//播放按钮
var $playbtn = $($('.iconfont')[1]);
//下一首按钮
var $nextbtn = $($('.iconfont')[2]);
//上一首按钮
var $prebtn = $($('.iconfont')[0]);
//模式按钮
var $modebtn = $($('.iconfont')[3]);
//音乐
var music = document.querySelector('.music');
//唱片图片
var $musicPic = $('.musicPic .pic');
var $musicPointer = $('.musicPointer');
var $backBlur = $('.backBlur');
//歌曲进度
var $process = $('.song_process');
var $processBar = $('.song_process_bar');
var $songProcess = $('.song_process_bar .process');
var $songProcessBtn = $('.song_process_bar .process .process_btn');
let input_song = document.querySelector('input[name=song]');
//音量进度
let input_voice = document.querySelector('input[name=voice]');
var $voiceProcess = $('.voice_process_bar .process');
var $voiceProcessBtn = $('.voice_process_bar .process .process_btn');
//歌单信息
var songArr = [
    { title: '未知', singer: '未知', src_audio: "./video/song1.mp3", src_img: './img/music1.jpg' },
    { title: '刺客伍六七片头', singer: '纯音乐', src_audio: "./video/刺客伍六七片头.mp3", src_img: './img/伍六七.jpg' },
    { title: '踏山河', singer: '七叔(叶泽浩)', src_audio: "./video/踏山河-七叔(叶泽浩).mp3", src_img: './img/踏山河.jpg' },
    { title: '小城夏天', singer: 'LBI利比', src_audio: "./video/小城夏天-LBI利比.mp3", src_img: './img/小城夏天.jpg' },
    { title: '耍把戏', singer: '阿禹ayy', src_audio: "./video/耍把戏-阿禹ayy.mp3", src_img: './img/耍把戏.jpg' },
];
//初始歌曲
var $music_info_title = $('.music_info_title');
var $music_info_singer = $('.music_info_singer');
// 歌单列表
var $music_list_item = $('.music_list_item')

function update(i, T) {
    $music_info_title.text(songArr[i].title);
    $music_info_singer.text(songArr[i].singer);
    $musicPic[0].src = songArr[i].src_img;
    music.src = songArr[i].src_audio;
    $backBlur.css({ 'background-image': 'url("' + songArr[i].src_img + '")' });
    if (T) {
        $songProcess.css('width', 0); //歌曲进度条
        $songProcessBtn.css('left', 0);
        music.play();
    }
}

//初始
update(0, false);
//点击下一首时
var index = 0;
$nextbtn.click(function () {
    if ($modebtn.hasClass('icon-liebiaoxunhuan') || $modebtn.hasClass('icon-danquxunhuan')){
        index++;
        if (index > songArr.length - 1) {
            index = 0;
        }
        update(index, true);
    }else{
        var index =  Math.floor(Math.random() * songArr.length)
        //0~songarr.length
        console.log(index);
        update(index, true);
    }
});
//点击上一首时
$prebtn.click(function () {
    if ($modebtn.hasClass('icon-liebiaoxunhuan') || $modebtn.hasClass('icon-danquxunhuan')){
        index--;
        if (index < 0) {
            index = songArr.length - 1;
        }
        update(index, true);
    }else{
        var index =  Math.floor(Math.random() * songArr.length)
        //0~songarr.length
        update(index, true);
    }
});


//设置检测音频时长
var $totalTime = $('.totalTime');
var $nowTime = $('.nowTime');
//时长转换为分秒值
function songTime(num) {
    var time;
    time = String(Math.floor(num / 60)).padStart(2, '0') + ":" + String(Math.floor(num % 60)).padStart(2, '0');
    // console.log(time);
    return time;
}
music.oncanplay = function () {
    $totalTime.text(songTime(music.duration));
    $nowTime.text(songTime(music.currentTime)); //初始化
};

//歌曲进度条表单事件
input_song.oninput = function () {
    $songProcess[0].style.width = this.value + '%';
    $songProcessBtn[0].style.left = this.value / 100 * 323 + 'px';
    music.currentTime = (this.value * music.duration) / 100;
};
//音量进度条表单事件
input_voice.oninput = function () {
    $voiceProcess[0].style.width = this.value + '%';
    $voiceProcessBtn[0].style.left = this.value / 100 * 93 + 'px';
    music.volume = this.value / 100;
};



// 点击播放时
$playbtn.click(function () {
    if ($(this).hasClass('icon-bofang')) {
        music.play();
    } else {
        music.pause();
    }
});
//点击模式切换
$modebtn.click(function () {
    if ($(this).hasClass('icon-liebiaoxunhuan')) {
        $modebtn.addClass('icon-danquxunhuan').removeClass('icon-liebiaoxunhuan');
    } else if ($(this).hasClass('icon-danquxunhuan')) {
        $modebtn.addClass('icon-suijibofang').removeClass('icon-danquxunhuan');
    } else {
        $modebtn.addClass('icon-liebiaoxunhuan').removeClass('icon-suijibofang');
    }
});
//键盘触发播放事件
$(document).keydown(function (event) {
    if (event.which == 32) {
        if ($playbtn.hasClass('icon-bofang')) {
            music.play();
        } else {
            music.pause();
        }
    }
});
// 开始播放时运行
music.onplay = function () {
    //console.log("播放中");
    $playbtn.addClass('icon-zanting').removeClass('icon-bofang');
    // $musicPic.addClass('rotate')
    $musicPic.css('animation-play-state', 'running');
    $musicPointer.css('transform', 'rotate(0deg)');
};

// 暂停时运行,不计入初始的暂停状态
music.onpause = function () {
    //console.log("暂停");
    $playbtn.addClass('icon-bofang').removeClass('icon-zanting');
    // $musicPic.removeClass('rotate')
    $musicPic.css('animation-play-state', 'paused');
    $musicPointer.css('transform', 'rotate(-15deg)');
};


// 播放过程中
music.ontimeupdate = function () {
    //时间进度更新
    $nowTime.text(songTime(music.currentTime));
    //歌曲进度条更新
    $songProcess.css('width', (this.currentTime / this.duration) * 100 + "%"); //歌曲进度条
    $songProcessBtn.css('left', this.currentTime / this.duration * 323 + 'px');
    //播放开关更新
    if (music.duration === music.currentTime) {
        if ($modebtn.hasClass('icon-liebiaoxunhuan')) {
            //列表循环
            //播完自动下一首
            index++;
            if (index > songArr.length - 1) {
                index = 0;
            }
            update(index, true);
        } else if ($modebtn.hasClass('icon-danquxunhuan')) {
            //单曲循环
            music.play();
        }else{
            index =  Math.floor(Math.random() * songArr.length)
            //0~songarr.length
            update(index, true);
        }
    }
};