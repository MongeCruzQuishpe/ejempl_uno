console.log('correcto');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'contactos.json', true);

    xhttp.send();

    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res= document.querySelector('#res');
            res.innerHTML='';

            for(let item of datos){
                res.innerHTML+=` 
                    <tr>
                        <td>${item.Nombre}</td>
                        <td>${item.Número}</td>
                        <img src="${item.Imagen}" width= "200" height="200"></img>
                        
                    </tr>    
                `
            }
        }
    }
}
