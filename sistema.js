//terminal
console.log('Você está prestes a iniciar seus sitema de cadastro; Aguarde!');

console.log('você possui um cadastro?');

var s = 'sim'
var n = 'nao'

let cadastro = n

if (cadastro === n) {
    console.log(cadastro);
    console.log('Vamos fazer o seu cadastro!');
} else {
    console.log(cadastro);
    console.log('siga até a página de acesso no seu e-mail');
}

console.log('Hora de escolher uma data! (Formato: dia do mês)')

var dataHoje = new Date()
var dia = String(dataHoje.getDate())
monName = new Array("Janeiro", "Fevereiro", "março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

let suaData = new Date()

//var now = String(suaData.getDate())  --> da a data de hoje e fica inválida.

var now = suaData.getDate() + Math.floor(Math.random() * 10) // para conseguir um valor acima da data atual aleatório


if (now > dia) {
    console.log('Hoje é dia: ' + dia + ' de ' + monName[dataHoje.getDay()])
    console.log('Sua data é: ' + now + ' de ' + monName[dataHoje.getDay()])
    console.log('A data coincide com um período válido!');
} else {
    console.log('Hoje é dia ' + dia)
    console.log('O dia selecionado é: ' + now + ' portanto:')
    console.log('Data inválida! Selecione outro período.')
}

console.log('Tudo pronto!! Hora de selecionar seus participantes! (Palestrantes incluídos na mesma lista)')

var idade = Math.floor(Math.random() * 100)
var idadeMin = 18
let participantes = new Array('maria', 'Ana', 'José', 'Vitória', 'Ana', 'Vitor', 'Pedro', 'Guilherme', 'Gustavo')

console.log('Sua idade ' + idade)
console.log('A idade mínim para todos além de você é: '+ idadeMin)
console.log('Devem estar listados apenas maiores de idade.')

if (idade < idadeMin) {
    console.log('A idade não preenche o valor mínimo. O cadastro não é permitido pela idade')
} else {

    for (idade >= idadeMin; participantes.slice; participantes++) {
        if (participantes.length > 100) {
            console.log('A quantidade de participantes é maior do que a aceitável.')
        } else {
            console.log(participantes)
            console.log('A quantidade de participantes é menor que 100.')
            console.log('Tudo nos conformes!! Seu evento já foi criado. Confira seu e-mail para ter acesso a configurações mais específicas.')
        }
    }

}




//html