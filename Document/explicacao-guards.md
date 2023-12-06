# Explicação sobre Routes Guards

Por exemplo, restringimos o acesso de um usuário a área de membros antes de serem autenticados por meio do sistema de login.

Ou, se um usuário tiver alterações pendentes que precisam ser salvas antes de navegar para fora de um componente de opções.

## Tipos de guardas de rota

- **CanActivate:** decide se uma rota (ou componente) pode ser ativada, como um sistema de login.
- **CanDeactivate:** decide se um usuário pode navegar para longe de uma rota (ou componente), como solicitar a confirmação de alterações pendentes.
- **CanLoad:** verifica se pode ou não carregar o módulo específico. Geralmente usado com Lazy-Load.
- **CanActivateChild:** é semelhnate a CanActivate, mas se aplica a rotas aninhadas.

## Resumindo

Os Route Guards do angular nos permitem controlar a acessibilidade de uma rota com base nas condições fornecidas na implementação de umn serviço.

Basicamente com os guards você consegue controlar o acesso autorizado de determinada rota ou adicionar alguma outra lógica para acesso.
