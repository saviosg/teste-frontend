# Teste frontend

Esse projeto foi feito com [Create React App](https://github.com/facebook/create-react-app).

Link de demonstração: <https://teste-frontend-five.vercel.app>

O motivo é que já tenho uma certa familiaridade com ele e não precisaria usar
muita coisa do NextJS.

Para o CSS utilizei styled-components, para solitações HTTP escolhi o Axios e
para datas usei date-fns.

Foi necessário um dia de sexta-feira para a criação. A estruturação do layout
da página e o conhecimento de HTML/React/JavaScript foram tranquilos. A parte
mais trabalhosa foi fazer o alinhamento correto dos elementos em CSS e manter
fidelidade ao layout original. Não usei nenhum framework CSS, foi todo feito manualmente.

Algumas coisas tive que fugir do layout original, como a descrição de livro de duas
linhas. Algumas descrições ultrapassavam o limite do elemento e com CSS puro
não existe uma forma fácil de esconder o texto em overflow de mais de uma linha
com "...". A solução mais simples que encontrei foi limitar em uma linha com
"..." ao final, como o CSS suporta.

Durante a criação consultei bastante o Google quando tinha dúvidas. Os sites
que mais usei foram a documentação da Mozilla, CSS-Tricks e Stack Overflow.
