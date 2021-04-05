$(function(){
    $('.acchow').hide();
    document.getElementById("question-click-function").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-two').hide();
    document.getElementById("question-click-function-two").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-two').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-two').hide();
    document.getElementById("question-click-function-three").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-three').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-two').hide();
    document.getElementById("question-click-function-four").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-four').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-two').hide();
    document.getElementById("question-click-function-five").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-five').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-six').hide();
    document.getElementById("question-click-function-six").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-six').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-seven').hide();
    document.getElementById("question-click-function-seven").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-seven').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-eight').hide();
    document.getElementById("question-click-function-eight").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-eight').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-nine').hide();
    document.getElementById("question-click-function-nine").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-nine').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-ten').hide();
    document.getElementById("question-click-function-ten").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-ten').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-eleven').hide();
    document.getElementById("question-click-function-eleven").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-eleven').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-twelve').hide();
    document.getElementById("question-click-function-twelve").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-twelve').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-thirteen').hide();
    document.getElementById("question-click-function-thirteen").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-thirteen').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-fourteen').hide();
    document.getElementById("question-click-function-fourteen").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-fourteen').slideToggle(300);
        })
    };
})
$(function(){
    $('.acchow-fifthteen').hide();
    document.getElementById("question-click-function-fifthteen").onclick = function(){
        $(function(){
            $("after-content-b").addClass("changed");
            $('.acchow-fifthteen').slideToggle(300);
        })
    };
})

// 資料請求の箇所へページ内リンク
$(function(){
    // このクラス名をクリックした時
    $('a[href^="#"]').click(function(){
        // hrefの中身を取得し変数hrefに代入
        var href = $(this).attr("href");
        //取得した値が＃もしくは空白の場合htmlをそれ以外の場合はhrefの中身を変数に代入(あとで調査)→ if文が一行で表されている
        var target = $(href == '#' || href == '' ? 'html' : href);
        //リンク先のトップからの位置を変数に代入（＃はhtmlのidかname属性で指定）
        var position = target.offset().top;
        //positionの位置まで動かす
        $('html,body').animate({scrollTop : position}, 500);
        return false;
    });
});

// Topへ戻るためのボタンの処理
$(function(){
    //変数にid名を代入
    var pagetop = $('#top-return');
    //ボタンを非表示
    pagetop.hide();
   //何pxかスクロールしたらボタン表示
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            pagetop.fadeIn();
        }else{
            pagetop.fadeOut();
        }
    });
    //ボタンをクリックしたらページのトップへ(0.5秒)
    pagetop.click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
});
