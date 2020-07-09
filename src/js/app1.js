import '../css/app1.css'
import $ from 'jquery'

const $span = $('#app1 > span')
let v = localStorage.getItem('value')
v ? $span.text(v) : $span.text(0)
$('.btnAdd').click( e => {
    let value = parseFloat($span.text())
    $span.text(++value)
    localStorage.setItem('value',value)
})

$('.btnMinus').click( e => {
    let value = parseFloat($span.text())
    $span.text(--value)
    localStorage.setItem('value',value)
})

$('.btnMul').click( e => {
    let value = parseFloat($span.text())
    value *= 2
    $span.text(value)
    localStorage.setItem('value',value)
})

$('.btnDiv').click( e => {
    let value = parseFloat($span.text())
    value /= 2
    $span.text(value)
    localStorage.setItem('value',value)
})
