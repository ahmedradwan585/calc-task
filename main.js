let screen = document.querySelector(".screenContent")
let btns = document.querySelectorAll("button")

btns.forEach(function(el) {
  el.onclick = function(){
    switch(el.innerText){ 
      case "AC":
        screen.value = ""
        break;
        case "del":
          screen.value = screen.value.slice(0 , screen.value.length-1)
          break;
          case "sin":
            screen.value = Math.sin(eval(screen.value) * (Math.PI/180)).toFixed(1)
            break;
          case "cos":
            screen.value = Math.cos(eval(screen.value)*(Math.PI/180)).toFixed(1)
            break;
          case "tan":
            screen.value = Math.tan(eval(screen.value)*(Math.PI/180)).toFixed(1)
            break;
            case "=":
              if(screen.value == ""){
                screen.value = "0"
              }else{
               screen.value = eval(screen.value)
              }
              break;
            default:
              const operator =["*" , "+" , "/" , "-", "%"]
               const lastChar = screen.value.slice(-1)
               if(operator.includes(lastChar) && operator.includes(el.innerText)){
                break;
               }
               screen.value += el.innerText
               
    }

   
    btns.forEach(function(ele){
      ele.style.border = "2px solid #ddd"; 
    })
     el.style.border = "2px solid #ccc"; 
  }
})
