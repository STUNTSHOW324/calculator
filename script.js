let actions=["/","*","+","-","."]
document.querySelector(".button").onclick=function(event){
    if (event.target.classList.contains("num")){
        document.querySelector("input").value+=event.target.innerHTML
        console.log(event.target.innerHTML)
    }
    else if (event.target.classList.contains("act")){
        let input=document.querySelector("input").value
        let last= input[input.length-1]
        let btn=event.target.innerHTML
        if (actions.indexOf(last)!=-1){
            console.log(event.target.innerHTML)
            input=input.replace(/.$/,btn)
            document.querySelector("input").value=input
        }
        else {
            document.querySelector("input").value+=event.target.innerHTML
        }     
    }
    else if (event.target.classList.contains("eql")){
        let input=document.querySelector("input").value
        let result=eval(input)
        document.querySelector("input").value=result
    }
    else if (event.target.classList.contains("ce")){
        document.querySelector("input").value=""
    }
    else if (event.target.classList.contains("c")){
        let input=document.querySelector("input").value
        input=input.substring(0,input.length-1)
        document.querySelector("input").value=input
    }

    
}