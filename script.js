 
replaceText(document.body)

 function replaceText(element){
     if( element.hasChildNodes()){
         element.childNodes.forEach(replaceText)
     }
    
else if (element.nodeType === Text.TEXT_NODE){
     //to paragraph
     if(element.textContent.match(/sex|porn/gi)){
        element.parentElement.style.color ='black'
        element.parentElement.style.backgroundColor = 'black'
     }
     //to change word to no
        // element.textContent = element.textContent.replace(/sex|porn/gi,'No')
     }
 }