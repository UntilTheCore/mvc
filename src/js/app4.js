import '../css/app4.css'
import $ from 'jquery'

const v = `
    <section id="app4">
        <div class="circle"></div>
    </section>
`

$(v).appendTo($('body > .page'))

$('.circle').on('mouseenter', e => {
    $('.circle').addClass('active')
})

$('.circle').on('mouseleave', e => {
    $('.circle').removeClass('active')
})

