<br>
<p align="center">
    <img style='padding: 8px;' src="https://appliancetheme.vtexassets.com/assets/app/src/vtex___751a9fb5b8e275bc4526ef358279243b.svg" alt="VTEX" width="200">
</p>
<p align="center">
    <img style='padding: 8px;' src="https://assets.website-files.com/5ff79f3ebebf6b12f6b7747f/5ffe04fc6284b7e90070d985_logo-gama-academy-p-500.png" alt="Gama-Academy" width="200">
</p>
<br>
<h1 align="center">
Desafio VTEX - Hiring Coders
</h1>

<p align="center">Desafio da segunda fase do programa Hiring Coders</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<p align="center">
  <a href="#o-desafio">O Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#a-estratégia">A Estratégia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#resultados">Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#consideracoes-finais">Considerações finais</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

---

## O Desafio
O desafio foi desenvolver o ecommerce da UPMedal.com. O layout foi fornecido e deveríamos, a partir do template padrão da  VTEX IO, criar uma réplica o mais próximo possível.
<br><br>

## A Estratégia
O pensamento inicial foi buscar desenvolver o projeto de forma que fosse possível passar por todo o assunto visto durante o curso, não me atendo a buscar uma estilização igual a proposta. A intenção foi desenvolver além do design, componentes do front, de serviço e administrativos.

## Recursos

- <img src="https://i.ibb.co/KD1sgdY/vtex-icon.png" width=16/> **VTEX IO** - Plataforma nativa capaz de ajudar a entrega de soluções de negócio com mais agilidade e segurança.
- ⚛️ **React** — Biblioteca JavaScript de código aberto com foco em páginas web.

## Resultados
O resultado será apresentado de forma comparativa entre o que foi pedido e o que foi desenvolvido, seguindo os pontos descritos no desafio. A cada ponto descrevo as principais dificuldades e considerações

* ### Menu superior
![Menu superior](https://i.ibb.co/fkG5TwM/menu-bar.png)
<br>
No original o tab-menu faz parte da barra superior. Não consegui colocar o tab-menu junto ao bloco de header. Tentei utilizar o sticky-layout pra deixa-lo fixo no topo, mas também sem sucesso.

* ### Banner
![Banner](https://i.ibb.co/6ryD0gL/banner.png)
<br>
O slider-layout já é bem parecido com o do design proposto. Com algumas poucas estilizações o resultado ficou bem semelhante.

* ### Lista de produtos
![Lista de produtos](https://i.ibb.co/TvwPHRC/product-list.png)
<br>
Esse deu trabalho. Inicialmente tentei fazer com o product-summary-list que utiliza o slide-layout. Colocar dois items por slide em bem fácil. Para criar as várias linhas com dois itens
cada tentei substituir o slide-layout por flex-layout, mas foi só dor de cabeça. Até a mentoria que mostrou que para esses casos se utiliza o search-result, ai tudo ficou mais fácil. :grin:<br>Tentei selecionar a categoria dos produtos apresentados com as abas da barra superior, mas sem sucesso.

* ### Minicart
![Minicart](https://i.ibb.co/ZGwnM7M/minicart.png)
<br>
Foi alterado bem pouco do componente minicart da vtex, apenas algumas cores.

* ### Página de produto
![Página de produto](https://i.ibb.co/kgCdvpj/product-page.png)
<br>
Para o slide de imagens do foi usado o product-imagens e algumas linhas de css.
Como os produtos não possuem "depoimentos" e "duvidas" optei por não utilizar o tab-layout. Quando o produto não possui descrição fica apenas uma barra cinza no layout. No mais, a página de produto ficou parecida com a original.

* ### Rodapé
![Rodapé](https://i.ibb.co/ygwb2h1/footer.png)
<br>
Visualmente o rodapé ficou bem parecido ao sugerido, mas os itens são estáticos e sem funcionalidade com exceção do rich-text "suporte" que direciona para o WhatsApp.

* ### Leads
No desafio também foi proposto a criação de um componente front-end para captura de leads, um aplicação customizada para consumir um serviço externo a Vtex (AWS) e como item opcional, uma aplicação administrativa.
<br><br>
__Formulário de leads__
<br>
A partir do store-block-template foi criado um bloco de formulário para captação de leads. Esse bloco possui o titulo, CTA e placeholder internacionalizados. O titulo e o texto CTA podem ser alterados a partir do painel administrativo. Salva a submissão do formulário no localStorage.
<br><br>
![Bloco de formulário para leads](https://i.ibb.co/fDnXGtq/lead-form.png)
<br><br>
__AWS__
<br>
Utilizando os serviços API Gateway, API Lambda e DynamoDB da aws foi desenvolvido um serviço para armazenar e listar os leads.
<br>
![Salvando lead](https://i.ibb.co/br7Ypy5/save-lead.png)
Salvando um lead
<br><br>
![Listando leads](https://i.ibb.co/TRJhm3D/list-lead.png)
Listando os leads
<br><br>
__Serviço Vtex customizado e aplicação administrativa__

Acredito que por se tratar de uma conta compartilhada entre os 3000 participantes do programa de formação, cada um em seu workspace, algumas permissões não foram concedidas para não gerar confusão.

![Restrição para criação de serviços customizados](https://i.ibb.co/JWTMfC7/service-error.png)
<br>
O serviço customizado deveria servir de ponto de acesso externo à nuvem da Vtex, possibilitando a comunicação com a AWS.
<br><br>
![Restrição para criação e serviço administrativo](https://i.ibb.co/ySb0WB8/admin-error.png)
<br>
O serviço administrativo deveria listar os dados dos leads armazenados no serviço criado na AWS.

## Considerações finais
Foi bem desafiador desenvolver com uma tecnologia recém apresentada (pra mim), em meio as aulas, atividades, lives e mentorias do Hiring Coders #2. Uma ótima experiência, sem dúvida.

A tecnologia do VTEX IO facilita muito a criação de páginas de ecommerce, com vários blocos já disponíveis e a utilização de low code. Essa facilidade não engessa o framework, que permite um alto nível de customização e criação de novos blocos e serviços.

Com um pouco de estudo da documentação e estrutura do framework, as possibilidades são praticamente infinitas.

## Licença

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
