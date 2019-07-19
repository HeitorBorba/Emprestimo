let nome = (prompt('Digite seu nome .')); {
    confirm("Este é seu nome " + nome + "?");

}
let idade = Number(prompt('Digite sua idade .')); {
    confirm("Voce tem " + idade + " anos.");

    if (idade >= 25 && idade <=60) {
        alert("Sua idade foi aprovada .");
    }
    
    else{
        alert("Sua idade foi reprovada .");
    }
}
let salario = Number(prompt('Digite seu salario .'));{
    confirm("Seu salario é " + salario + " ?" );
     
    if (salario >=2000 ) {
    alert("Seu salario foi aprovado .");
    }

    else{
        alert("Seu salario foi reprovada .");
    }

    alert("Voce " + nome + ",com o salario de " + salario + " ,pode pedir emprestimo no maximo de " + (salario* 10 + "."));

}





