document.write("<br></br>");
document.write("현재 문서의 주소는 " + location.href + "입니다.<br>");
document.write("현재 문서의 호스트 이름은 " + location.hostname + "입니다.<br>");
document.write("현재 문서의 파일 경로명은 " + location.pathname + "입니다.<br>");

document.write("현재 사용자의 디스플레이 화면의 너비는 " + screen.width + "픽셀입니다.<br>");
document.write("현재 사용자의 디스플레이 화면의 높이는 " + screen.height + "픽셀입니다.<br>");
document.write("현재 브라우저 창의 너비는 " + window.outerWidth + "픽셀입니다.<br>");
document.write("현재 브라우저 창의 높이는 " + window.outerHeight + "픽셀입니다.<br>");

document.write("실제 사용할 수 있는 화면의 너비는 " + screen.availWidth + "픽셀입니다.<br>");
document.write("실제 사용할 수 있는 화면의 높이는 " + screen.availHeight + "픽셀입니다.<br>");

var bitColorDepth = screen.colorDepth;
document.write("사용자 화면에서 한 색상당 사용할 수 있는 비트수는 " + bitColorDepth + "개입니다.<br>");
document.write("즉, 한 색상은 총 " + Math.pow(2, bitColorDepth) + "가지로 표현됩니다.");
var bitPixelDepth = screen.pixelDepth;
document.write("사용자 화면의 한 픽셀당 표시할 수 있는 비트수는 " + bitPixelDepth + "개입니다.<br>");

 


document.write("현재 사용 중인 브라우저의 이름은 " + navigator.appName + "입니다.<br>");
document.write("또한, 해당 브라우저의 코드명은 " + navigator.appCodeName + "입니다.<br>");
document.write("현재 사용 중인 브라우저의 버전 정보는 " + navigator.appVersion + "입니다.<br><br>");
document.write("userAgent 프로퍼티로 알 수 있는 추가 정보는 " + navigator.userAgent + "입니다.");
document.write("현재 브라우저가 실행되고 있는 운영체제는 " + navigator.platform + "입니다.<br>");
document.write("현재 브라우저의 기본 언어 설정은 " + navigator.language + "입니다.<br>");
document.write("현재 브라우저는 자바 애플릿를 ");

if (navigator.javaEnabled()) {
    document.write("실행할 수 있습니다.<br>");
} else {
    document.write("실행할 수 없습니다.<br>");
}
document.write("현재 브라우저는 쿠키를 ");
if (navigator.cookieEnabled) {
    document.write("사용할 수 있습니다.<br>");
} else {
    document.write("사용할 수 없습니다.<br>");
}


// 생성한 DOM 객체
const div = document.createElement('div')
div.className = "DOM1"
div.innerText = "I create DOM!!!"

const div2 = document.createElement('div')
div2.className = "DOM2"
div2.innerText = "I create DOM2"

div.appendChild(div2)

// HTML 문서에 생성한 DOM 삽입하기
const root = document.getElementById('root')
root.appendChild(div)

// div.remove()
div.removeChild(div2)


function sayHello(){
    alert("hello");
}

function popUP(){
    alert("반갑습니다")

}

function changeText(e) {
    e.innerHTML = "내용이 바뀐다";
}



const test = document.createElement('div')
test.innerText = "test Node입니다"
test.setAttribute('id', 'testNode')
test.setAttribute('src', 'wwww.google.com')

div2.appendChild(test)




