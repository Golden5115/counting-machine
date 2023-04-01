const num = document.getElementById('num')

const btns = document.querySelectorAll('.btn')
console.log(btns)
count = 0
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        active = e.currentTarget.innerHTML
        if (active =='increase' ){
            count ++
            num.innerHTML=count
            
        }
        else if(active=='decrease' ){
            count--
            num.innerHTML=count
        }
        else{
            count = 0
            num.innerHTML=count
        }

        if (count < 0){
            num.style.color = "red"
        }
        else if (count > 0){
            num.style.color = 'green'
        }
        else{
            num.style.color='white'
        }

    })
    
})