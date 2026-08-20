   //Botão curtida 

 document.addEventListener("DOMContentLoaded",()=>{
    const likeBtn =ddocument.querySelector (".left-actions .action.btn:first-child");
    if(!likeBtn) return;
    const likeSvg=likeBtn.querySelector("svg");


       //localiza o contador
       

       let textNode =Arry .from(likeBtn.childNodes).find(node) => node.nodeType
       ===Node.TEXT_NODE && node.textContent.trim()!==""
}    
     //zera o contador
     let cont = 0;

     //atualiza
     if(textNode){
    textNode,textContent =  '0';
     }
    

     //coração 
     function applyLikedStyle(){
    likeSvg.style.fill ="#FF69B4" ;
    likeSvg.style.stroke ="#FF69B4" ;
    likeSvg.style.color ="#FF69B4" ;


    //efeito curtida 
    likeSvg.style.transform = "scale(1.3)";
    setTimeout(() => (likeSvg.style.transform = "scale(1)" )150);
        
    }, timeout);


     }
