import '../css/app1.css'
import $ from 'jquery'

const eventBus = $(window)
// 数据相关都放到m
const m = {
    data: {
        n: parseInt(localStorage.getItem('value'))
    },
    create() {},
    delete() {},
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('value', m.data.n)
    },
    get() {}
}
// 视图相关都放到v
const v = {
    el: null,
    html: `
      <span id="number">{{n}}</span>
    <div class="btns">
      <button id="add1">+1</button>
      <button id="minus1">-1</button>
      <button id="mul2">*2</button>
      <button id="divide2">÷2</button>
  </div>
`,
    init(container) {
        v.el = $(container)
    },
    render(n) {
        if (v.el.children.length !== 0) v.el.empty()
        $(v.html.replace('{{n}}', n))
            .appendTo(v.el)
    }
}
// 其他都c
const c = {
    init(container) {
        v.init(container)
        v.render(m.data.n) // view = render(data)
        c.autoBindEvents()
        eventBus.on('m:updated', () => {
            v.render(m.data.n)
        })
    },
    // 表驱动编程
    events: {
        'click #add1': 'add',
        'click #minus1': 'minus',
        'click #mul2': 'mul',
        'click #divide2': 'div',
    },
    add() {
        m.update({n: m.data.n + 1})
    },
    minus() {
        m.update({n: m.data.n - 1})
    },
    mul() {
        m.update({n: m.data.n * 2})
    },
    div() {
        m.update({n: m.data.n / 2})
    },
    autoBindEvents() {
        for (let key in c.events) {
            const value = c[c.events[key]]
            const spaceIndex = key.indexOf(' ')
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            v.el.on(part1, part2, value)
        }
    }
}

export default c
// import '../css/app1.css'
// import $ from 'jquery'
//
//
// const v = `
//     <span>0</span>
//     <div class="btns">
//         <button class="btnAdd">+1</button>
//         <button class="btnMinus">-1</button>
//         <button class="btnMul">×2</button>
//         <button class="btnDiv">÷2</button>
//     </div>
// `
//
// const m = {
//     el : $('#app1'),
//     $span : undefined,
//     val : localStorage.getItem('value') || 0,
//     events: {'.btnAdd':'add','.btnMinus' : 'minus','.btnMul' : 'mul','.btnDiv' : 'divide'}
// }
//
// const c = {
//     init() {
//         $(v).appendTo(m.el)
//         m.$span = m.el.children('span')
//         m.$span.text(m.val)
//         c.bindEvents()
//     },
//     bindEvents(){
//         for(let key in m.events) {
//             $(key).click(  c.hasOwnProperty(m.events[key]) ? c[m.events[key]] : '')
//         }
//     },
//     getValue() {
//         return parseFloat(m.$span.text())
//     },
//     render(value) {
//         m.$span.text(value)
//         localStorage.setItem('value',value)
//     },
//     add(){
//         c.render(c.getValue() + 1)
//     },
//     minus(){
//         c.render(c.getValue() - 1)
//     },
//     mul(){
//         c.render(c.getValue() * 2)
//     },
//     divide(){
//         c.render(c.getValue() / 2)
//     }
// }
//
// c.init()
