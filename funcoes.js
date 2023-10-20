document.querySelectorAll('.str0').forEach(e=>{
        e.addEventListener("mouseover", function(){
            window.onmousemove=function(j){
                x=j.clientX
                y=j.clientY
                document.getElementById("nome").style.top=y-30+"px"
                document.getElementById("nome").style.left=x+10+"px"
                
            }
            e.style.fill="pink"
            document.getElementById("nome").style.opacity=1
            document.getElementById("nomep").innerText=e.id
            
        })

        e.addEventListener("mouseleave", function(){
            e.style.fill="#c5c5c5"
            document.getElementById("nome").style.opacity=0
        })
        
    })
