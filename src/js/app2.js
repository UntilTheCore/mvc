import '../css/app2.css'
import $ from 'jquery'

// 默认显示tab1
let showTabIndex = localStorage.getItem('tabIndex')
showTabIndex = showTabIndex ? showTabIndex : 0
$('.tabs > li').removeClass('selected').eq(showTabIndex).addClass('selected')
$('.contents > li').removeClass('active').eq(showTabIndex).addClass('active')

$('#app2 > .tabs').on('click','li', e => {
    const index = $(e.currentTarget).index()
    $('.tabs > li').removeClass('selected').eq(index).addClass('selected')
    $('.contents > li').removeClass('active').eq(index).addClass('active')
    localStorage.setItem('tabIndex',index)
})