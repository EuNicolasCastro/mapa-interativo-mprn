document.querySelectorAll('str0').forEach(e=>{
    e.addEventListener('mouseover', function(){
        window.onmousemove=function(j){
            x=clientX
            y=clientY
            document.getElementById("nome").style.top = y-30+"px"
            document.getElementById("nome").style.left = x+10+"px"
        }
        e.style.fill="#345678"
        document.getElementById("nomep").innerText = e.id
        document.getElementById("nome").style.opacity=1
    })
    e.addEventListener("mouseleave", function(){
        e.style.fill="#123456"
        document.getElementById("nome").style.opacity=0
    })
    
})
