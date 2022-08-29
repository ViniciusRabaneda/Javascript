function validarlogin (nome,senha){
    if (nome==='pedro' && senha==='123'){
        return(true);
    }
    else{
        return(false);
    }
}
let nome='pedro'
let senha='123'

if (validarlogin(nome,senha)==false){
    console.log(`Acesso NEGADO!`)
}
else{
    console.log(`Acesso Permitido `)
}