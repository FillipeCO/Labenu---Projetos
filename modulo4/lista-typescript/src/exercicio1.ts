// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 

// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"

//  input: string, string
//  output: string

function nomeComData(nome: string, data: string): string {
    let dia: string = data.slice(0, 2);
    let mes: string = data.slice(3, 5);
    let ano: string = data.slice(6, 10);
    if (mes === '01') {
        mes = 'janeiro';
    } else if (mes === '02') {
        mes = 'fevereiro';
    } else if (mes === '03') {
        mes = 'março';
    } else if (mes === '04') {
        mes = 'abril';
    } else if (mes === '05') {
        mes = 'maio';
    } else if (mes === '06') {
        mes = 'junho';
    } else if (mes === '07') {
        mes = 'julho';
    } else if (mes === '08') {
        mes = 'agosto';
    } else if (mes === '09') {
        mes = 'setembro';
    } else if (mes === '10') {
        mes = 'outubro';
    } else if (mes === '11') {
        mes = 'novembro';
    } else if (mes === '12') {
        mes = 'dezembro';
    }

    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
}

console.log(nomeComData("Fillipe", "30/07/1992"));