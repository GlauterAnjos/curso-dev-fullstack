/*

AJAX

Asynchronous JavaScript And XML

ROTAS

END POINT

*/



    
    let descricao = document.querySelector('#descricao')

    console.log(listPost)
    
    const xhttp = new XMLHttpRequest()
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
         
            let listPost = document.querySelector('#listPost').src= response[1].url
            
        }
        
    }
    
    xhttp.open('GET','https://jsonplaceholder.typicode.com/photos', true )
    xhttp.send()


