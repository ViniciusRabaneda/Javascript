function calcularimovel(metragem,qtd){
    let precobase= 3000
    if (qtd==1) {
       return(metragem*1*precobase);  
    }
    else if (qtd==2){
        return(metragem*1.2*precobase);
    }
    else {
        return(metragem* 1.5 *precobase);
    }
}

let valor=123;
let quartos=3;
let precofinal= calcularimovel(valor,quartos)
console.log(`O preço final para ${quartos} quartos é ${precofinal}`)