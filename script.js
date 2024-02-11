const url=('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=')

async function fetchData(name){
    const response=await fetch(`${url}${name}`)
    updateUI(response.url)
}

function updateUI(source){
   const imgDiv=document.getElementById('qr')
   imgDiv.src=source
}

const inputText=document.getElementById('input')
const searchBtn=document.getElementById('searchBtn')
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(inputText.value==''){
        alert('Enter a text here')
    }else{

        fetchData(inputText.value)
    }
})