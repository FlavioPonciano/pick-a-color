const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn') //Ativando evento listener
const color = document.querySelector('.color') //Mostrar o nome da cor segundo a array
//Adicionando um evento listener, escutando por um evento, nesse caso por um evento de clique.
btn.addEventListener('click', function(){
    const randomColor = getRandomColor() //declarando uma variavel com a function 
    document.body.style.background = colors[randomColor] //aplicando a cor

    //Puxando e atribuindo o nome da cor paraque apareça no span do html
    color.textContent = colors[randomColor]
})

//Uma função que consiga fazer um random de acordo com o tamanho da array
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}