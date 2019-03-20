
function create(obj, key){
    Object.defineProperty(obj, key, {
        set: function(v){
            reactor(obj, v)
        }
    })
}

let register = []
function reactor(obj, v){
    register.forEach(x => {
        if(x.obj == obj.name){
            x.dom[x.key] = v
        }
    })
}
let globals = {}
function bind(dom, name){
    let key = dom.getAttribute('v-model')
    let s = new Object()
    s.name = key
    globals[key] = s
    register.push({dom: dom, key: name, obj: key})
    create(s, 'v')
    dom.oninput = function(x){
        globals[key].v = dom.value
    }
}
function $(s){
    return document.querySelector(s)
}

bind($('#input'), 'value')
// bind($('#p'), 'innerHTML')
bind($('#s'), 'innerHTML')

globals.vinput.v = "xx"

// setInterval(function(){
//     let x = parseFloat(Math.random(), 10).toString(16)
//     globals.vbind.v = "hello" + x
//     globals.vinput.v = "fuck" + x
// }, 2000)
