# Explicação sobre Modulos

Um modulo (Module) ele é um mecanismo para agrupar componentes, diretivas, pipes e serviços realcionados, de forma a combinar com outros módulos para criar um aplicativo.

Uma aplicação angular pode ser pensada como um quebra-cabeça. Onde cada bloco tem como objetivo fornecer uma funcionalidade ou recurso específico.

Constuímos um Software como se fosse um quebra cabeça e conforme esse quebra cabeça cresce, fica difícil e oneroso a sua manutenção. Por isso adotamos alguns modelos de arquitetura e cosntrução de Software.

O Angular fornece uma boa maneira de organizar esses blocos de foprma simples e eficaz usando módulos (também conhecidos como ngModules).

1. Anatomia (ngModule)
    @NgModule({
        declarations: [
            Serve para declarar os componentes.
        ],
        imports: [
            importa funcionalidades de outros componentes.
        ],
        exports: [
            exportar os componentes para ser utilizado em outro módulo.
        ],
        providers: [
            Utilizado em conjunto com os serviços.
        ],
        bootstrap: [
            So utilizado no componente principal (app-root).
        ],
    })
