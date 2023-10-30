async function ProcurarComarca(municipio){
    
    const tituloComarca = document.getElementById("tituloComarca")
    document.getElementById("comarca").style.opacity=1;
    if (municipio == 'Natal' || municipio == 'Parnamirim') {
        tituloComarca.innerText = `${municipio} fica na Comarca de Natal`
    } 
    if (municipio == 'Acari' || municipio == 'Carnaúba dos Dantas'){
         tituloComarca.innerText = `${municipio} fica na Comarca de Acari`
    }
    if (municipio == 'Alexandria' || municipio == 'João Dias' || municipio == 'Pilões'){
         tituloComarca.innerText = `${municipio} fica na Comarca de Alexandria`
    }
    else{
        tituloComarca.innerText = `${municipio} marcado`
    }
}

document.querySelectorAll('.str0').forEach(e=>{
        e.addEventListener("mouseover", function(){
            const caixaNome = document.getElementById("caixaNome")
            window.onmousemove=function(j){
                x=j.pageX
                y=j.pageY
                //if()
                caixaNome.style.top=y-10+"px"
                caixaNome.style.left=x+30+"px"
                
            }
            e.style.fill="pink"
            document.getElementById("caixaNome").style.opacity=1
            document.getElementById("nomep").innerText=e.id
        
        })

        e.addEventListener("mouseleave", function(){
            e.style.fill="#c5c5c5"
            document.getElementById("caixaNome").style.opacity=0
        })
        e.addEventListener("click",function(){
            ProcurarComarca(e.id)
        })

    })
