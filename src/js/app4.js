import '../css/app4.css'
import $ from 'jquery'
$('.circle').on('mouseenter', e => {
    console.log(1)
    $('.circle').addClass('active')
})

$('.circle').on('mouseleave', e => {
    $('.circle').removeClass('active')
})

