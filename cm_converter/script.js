const button= document.querySelector(".button")
const ans = document.getElementById('p')


button.addEventListener('click',() =>{
    const input1= Number(document.querySelector("input").value)
    const result=input1/2.54

    ans.innerHTML=result.toFixed(2)+ "inches"

    console.log(result)
    

})