import '../css/app3.css'
import $ from 'jquery'

// 默认在左边
let isActive = parseInt(localStorage.getItem('app3'))
isActive = isActive ? isActive : 0
if(isActive){
    $('.square').addClass('active')
}else {
    $('.square').removeClass('active')
}
$('#app3 > .square').click( e => {
    console.log(isActive);
    if(0 === isActive) {
        $(e.target).toggleClass('active',isActive)
        isActive = 1
    }else {
        $(e.target).toggleClass('active',isActive)
        isActive = 0
    }
    localStorage.setItem('app3',isActive)
})