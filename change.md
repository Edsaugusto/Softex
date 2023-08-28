# ATIVIDADE SOFTEX
## Site 1
 O primeiro site inspecionado por mim foi o https://cronometronline.com.br/, eu inspecionei o botao de iniciar a contagem do cronometro. A abrir o console do navegador, pude ver que o botao estava envolto de uma tag <a> que geralmente indica um link no html, porem no nosso caso a tag <a> esta com um href referenciando um arquivo JS com uma função StartCounting.
![arquivo 1](https://github.com/Edsaugusto/Softex/assets/90328070/da3ffc7f-39fe-482c-b16b-fb326fd8349e)

Após verificar que a tag <a> estava referencia um arquivo js mais especificamente a função StartCounting, fui em busca de onde esta o codigo dessa função. Ao achar o arquivo, pude entender um pouco como funciona tal função. 
![arquivo 2](https://github.com/Edsaugusto/Softex/assets/90328070/d02e8c76-c5ba-4610-918e-8e265022131a)

## Site 2

O segundo site que verifiquei foi: https://dms.ufpel.edu.br/casca/modulos/imc-calc#comp/imc-main
Aqui eu inspecionei o botao de calcular o IMC, verifiquei que ele está em uma tag <button>, mas diferente do site anterior, nao vi ele chamando nenhuma função JS e nem nenhum arquivo. 
![arquivo 3](https://github.com/Edsaugusto/Softex/assets/90328070/45bf686f-6d9e-4167-812f-d2e441e74aa9)

mas percebi que no final do console tinha algumas tags chamadas <script>, resolvi vasculhar pra ver se achava algo.
![image](https://github.com/Edsaugusto/Softex/assets/90328070/ae9ce2fe-3dba-4248-8a3e-62ee5f6c89cd)

ao vasculhar mais o console, acabei achando um arquivo js chamado calculadoraImc
![Arquivo 4](https://github.com/Edsaugusto/Softex/assets/90328070/f47c5907-d8c6-420b-98c6-a95ce51a219f)
Aqui encontrei todo o "cerebro" da pagina, onde ocorria todos os calculos do imc, identificava se o usuario é adulto ou idoso e onde tinha os comandos pra mostrar o resultado do calculo do IMC.
