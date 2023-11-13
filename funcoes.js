 async function ProcurarComarca(municipio){
    
    const tituloComarca = document.getElementById("tituloComarca")
    const informacaoComarca = document.getElementById("informacaoComarca")
    document.getElementById("comarca").style.opacity=1;
  
    /*  TERCEIRA ENTRANCIA */
  
    if (municipio == 'Natal') {
        tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - NATAL`
        informacaoComarca.innerText = `Estas serão informações sobre a comarca de Natal.
         Veja este texto.`
    }
    else if (municipio == 'Assú' || municipio == 'Carnaubais' || municipio == 'Porto do Mangue'){
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
    else if (municipio == 'Mossoró' || municipio == 'Serra do Mel'){
         tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - MOSSORÓ`
    }     
    else if (municipio == 'Nova Cruz' || municipio == `Lagoa d'Anta` || municipio == 'Montanhas' || municipio == 'Passa e Fica'){
         tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - NOVA CRUZ`
    }
    else if (municipio == 'Pau dos Ferros' || municipio == 'Água Nova' || municipio == 'Encanto' || municipio == 'Francisco Dantas' || municipio == 'Rafael Fernandes' || municipio == 'Riacho de Santana' || municipio == 'São Francisco do Oeste'){
         tituloComarca.innerText = `1ª PROMOTORIA DE JUSTIÇA - PAU DOS FERROS`
    }
     
    /*  SEGUNDA ENTRANCIA */
     
    else if (municipio == 'Acari' || municipio == 'Carnaúba dos Dantas'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - ACARI`
    }
    else if (municipio == 'Alexandria' || municipio == 'João Dias' || municipio == 'Pilões'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - ALEXANDRIA`
    }
    else if (municipio == 'Angicos' || municipio == 'Fernando Pedroza'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - ANGICOS`
    }
    else if (municipio == 'Apodi' || municipio == 'Felipe Guerra' || municipio == 'Itaú' || municipio == 'Rodolfo Fernandes' || municipio == 'Severiano Melo'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - APODI`
    }      
    else if (municipio == 'Areia Branca' || municipio == 'Grossos' || municipio == 'Tibau'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - AREIA BRANCA`
    }
    else if (municipio == 'Canguaretama' || municipio == 'Baía Formosa' || municipio == 'Vila Flor'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - CANGUARETAMA`
    }
    else if (municipio == 'Caraúbas'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - CARAÚBAS`
    }
    else if (municipio == 'Goianinha' || municipio == 'Espírito Santo' || municipio == 'Tibau do Sul'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - GOIANINHA`
    }
    else if (municipio == 'Jardim do Seridó' || municipio == 'Ouro branco'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - JARDIM DO SERIDÓ`
    }
    else if (municipio == 'Jucurutu'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - JUCURUTU`
    }
    else if (municipio == 'Lajes' || municipio == 'Caiçara do Rio do Vento' || municipio == 'Pedra Preta'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - LAJES`
    }
    else if (municipio == 'Luís Gomes' || municipio == 'José da Penha' || municipio == 'Major Sales' || municipio == 'Paraná'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - LUÍS GOMES`
    }
    else if (municipio == 'Macaíba' || municipio == 'Bom Jesus' || municipio == 'Ielmo Marinho'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - MACAÍBA`
    }
    else if (municipio == 'Martins' || municipio == 'Antônio Martins' || municipio == 'Serrinha dos Pintos'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - MARTINS`
    }
    else if (municipio == 'Parelhas' || municipio == 'Equador' || municipio == 'Santana do Seridó'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - PARELHAS`
    }   
    else if (municipio == 'Parnamirim'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - PARNAMIRIM`
    }
    else if (municipio == 'Patu' || municipio == 'Messias Targino'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - PATU`
    }
    else if (municipio == 'Santa Cruz' || municipio == 'Campo Redondo' || municipio == 'Coronel Ezequiel' || municipio == 'Jaçanã' || municipio == 'Japi' || municipio == 'Lajes Pintadas' || municipio == 'São Bento do Trairí'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - SANTA CRUZ`
    }
    else if (municipio == 'Santana do Matos' || municipio == 'Bodó'){
          tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - SANTANA DO MATOS`
    }
    else if (municipio == 'Santo Antônio' || municipio == 'Lagoa de Pedras' || municipio == 'Jundiá' || municipio == 'Passagem' || municipio == 'Serrinha' || municipio == 'Várzea'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - SANTO ANTÔNIO`
    }
    else if (municipio == 'São Gonçalo do Amarante'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - SÃO GONÇALO DO AMARANTE`
    }
    else if (municipio == 'São José de Mipibu'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - SÃO JOSÉ DE MIPIBU`
    }     
    else if (municipio == 'São Miguel' || municipio == 'Coronel João Pessoa' || municipio == 'Doutor Severiano' || municipio == 'Venha-Ver'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - SÃO MIGUEL`
    }
    else if (municipio == 'São Paulo do Potengi' || municipio == 'Riachuelo' || municipio == 'Santa Maria' || municipio == 'São Pedro'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - SÃO PAULO DO POTENGI`
    }
    else if (municipio == 'Tangará' || municipio == 'Boa Saúde' || municipio == 'Senador Elói de Souza' || municipio == 'Serra Caiada' || municipio == 'Sítio Novo'){
         tituloComarca.innerText = `PROMOTORIA DE JUSTIÇA - TANGARÁ`
    }

    /* PRIMEIRA ENTRANCIA */
     
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
