# Explicação de como utilizar Data Binding

É uma forma de exibir dados em seu componente html, nada mais do que trabalhar com dados.

1. Interpolation
    A interpolação de texto permite que você incorpore valores dinâmicos em seus modelos html.

    HTML
    `<h1>{{title}}</h1>`

    Class TS
    public title: string = "Bem vindo";

2. Property Binding
    Ajuda a definir valores para propriedades de elementos ou diretivas html.

    HTML
    `<button [disable]="disabledButton">Button</button>`

    `<img [src]="itemImageUrl">`
    `<img src = "{{itemImageUrl}}>`

3. Event Binding
    É a associação de eventos que permite você escutar e responder as ações do usuário, como pressionamentos de tecla, movimentos do mouse, clique se toques.

    HTML
    `<button (clicl)= "calc()">Button</button>`

4. Two-way binding
    É a união do property-binding com event-binding. Use para ouvir eventos e atualizar valores simultaneamente entre os componente pais e filho.

    HTML
    `<input [(ngModel)]="nome">`
    `<span>{{nome}}</span>`

    Class TS
    public nome = "Dener";
