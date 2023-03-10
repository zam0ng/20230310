// let c;

// for(c=0; c<=80; c++){

//     console.log(parseInt((c/9)+1)+"*"+((c%9)+1)+"="+(parseInt((c/9)+1)*((c%9)+1)));
    
// }

        
    


let a = 1
for (let i = 1; i <= 9; i++) {
    
    console.log (a +"*" +i +"="+ a*i);
    
    if(i ==9)
    {
        if(a <= 8)
        { 
            i = 0;
            a++;
        }
    }
    
}
