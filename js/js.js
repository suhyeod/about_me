function con_1() {
    $('#con_1').show();
    $('#con_2').hide();
    $('#con_3').hide();
    $('#con_4').hide();
    $('#con_5').hide();
}

function con_2() {
    $('#con_2').show();
    $('#con_1').hide();
    $('#con_3').hide();
    $('#con_4').hide();
    $('#con_5').hide();
}

function con_3() {
    $('#con_3').show();
    $('#con_1').hide();
    $('#con_2').hide();
    $('#con_4').hide();
    $('#con_5').hide();
}

function con_4() {
    $('#con_4').show();
    $('#con_1').hide();
    $('#con_2').hide();
    $('#con_3').hide();
    $('#con_').hide();
}

function con_5() {
    $('#con_5').show();
    $('#con_1').hide();
    $('#con_2').hide();
    $('#con_3').hide();
    $('#con_4').hide();
}

$(".hov").on({
    "mouseover": function () {
        console.log("mousre Over");
        $(this).css({"text-shadow": "0.7px 0.7px 0.7px #000", "transition": "0.5s"})
    },
    "mouseout": function () {
        console.log("mouse Out");
        $(this).css({"transition": "0.5s"})
    }
})

function window_op() {
    let options = "top=0,left=0";
    window.open("http://www.naver.com", "_blank", options);
} /*인스타그램 주소 넣기*/ 

function pf_1() {
    let options = "top=0,left=0";
    window.open("http://www.naver.com", "_blank", options);
} /*딥디크 포트폴리오 넣기*/

function pf_2() {
    let options = "top=0,left=0";
    window.open("http://www.naver.com", "_blank", options);
} /*탐앤탐스 포트폴리오 넣기*/
