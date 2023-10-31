 async function ProcurarComarca(municipio){
    
    const tituloComarca = document.getElementById("tituloComarca")
    const informacaoComarca = document.getElementById("informacaoComarca")
    document.getElementById("comarca").style.opacity=1;

    if (municipio == 'Natal' || municipio == 'Parnamirim') {
        tituloComarca.innerText = `${municipio} fica na Comarca de Natal`
        informacaoComarca.innerText = ``
    } 
    else if (municipio == 'Acari' || municipio == 'Carnaúba dos Dantas'){
         tituloComarca.innerText = `${municipio} fica na Comarca de Acari`
    }
    else if (municipio == 'Alexandria' || municipio == 'João Dias' || municipio == 'Pilões'){
         tituloComarca.innerText = `${municipio} fica na Comarca de Alexandria`
    }
    else if (municipio == 'Assu' || municipio == 'Carnaubais' || municipio == 'Porto do Mangue'){
         tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - ASSU`
    }
    else if (municipio == 'Caicó' || municipio == 'São Fernando' || municipio == 'Timbaúba dos Batistas'){
         tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - CAICÓ`
    }     
    else if (municipio == 'Ceará-Mirim' || municipio == 'Pureza'){
         tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - CEARÁ-MIRIM`
    }
    else if (municipio == 'Currais Novos' || municipio == 'Cerro Corá' || municipio == 'Lagoa Nova'){
         tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - CURRAIS NOVOS`
    }
    else if (municipio == 'João Câmara' || municipio == 'Bento Fernandes' || municipio == 'Jandaíra' || municipio == 'Jardim de Angicos' || municipio == 'Parazinho' || municipio == 'Poço Branco'){
         tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - JOÃO CÂMARA`
    }
    else if (municipio == 'Macau' || municipio == 'Galinhos' || municipio == 'Guamaré'){
         tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - MACAU`
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
