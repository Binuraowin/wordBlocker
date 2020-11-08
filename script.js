 
replaceText(document.body)

 function replaceText(element){
     if( element.hasChildNodes()){
         element.childNodes.forEach(replaceText)
     }
    
else if (element.nodeType === Text.TEXT_NODE){
    
     if(element.textContent.match(/sex|porn/gi)){
        //color the blocked word
        // const newElement = document.createElement('span')
        // newElement.innerHTML = element.textContent.replace(/(sex|porn)/gi,
        // '<span style="background-color: black; color:black">$1</span>'
        // )
        // element.replaceWith(newElement)

        //to remove the blocked word
      //  element.parentElement.remove()

      //to animate word
       const newElement = document.createElement('span')
        newElement.innerHTML = element.textContent.replace(/(sex|porn)/gi,
        '<span class="rainbow">$1</span>'
        )
        element.replaceWith(newElement)

          //to paragraph
    //     element.parentElement.style.color ='black'
    //     element.parentElement.style.backgroundColor = 'black'
     }
     //to change word to no
         element.textContent = element.textContent.replace(/sex|porn/gi,'No')
     }
 } 