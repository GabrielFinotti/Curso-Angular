# Explicação sobre Lifecycle Hooks

O ciclo de vida no Angular é composto por uma série de eventos que ocorrem durante o ciclo de vida de um componente ou diretiva. Esses eventos permitem que você controle o comportamento e a execução de código em diferentes estágios da vida de um componente. Os principais métodos do ciclo de vida no Angular são:

1. ngOnChanges

   - Para que serve: Este método é chamado sempre que um valor de entrada (`@Input`) de um componente muda.

   - Explicação: É útil quando você precisa reagir a mudanças nos dados de entrada e atualizar o estado interno do componente com base nesses dados.

2. ngOnInit

   - Para que serve: É chamado uma única vez após a inicialização do componente.

   - Explicação: Use este método para realizar inicializações que precisam ocorrer assim que o componente é criado, como buscar dados iniciais de um serviço.

3. ngDoCheck

   - Para que serve: É chamado durante cada ciclo de detecção de mudanças.

   - Explicação: É útil quando você precisa realizar verificações manuais para detectar mudanças que não são detectadas automaticamente pelo Angular, como alterações em objetos ou arrays.

4. ngAfterContentInit

   - Para que serve: É chamado depois que o Angular projeta o conteúdo na visão do componente (dentro das tags `<ng-content>`).

   - Explicação: Use este método quando precisar interagir com elementos projetados no componente.

5. ngAfterContentChecked

   - Para que serve: É chamado após cada verificação do conteúdo projetado.

   - Explicação: Útil quando você precisa realizar ações após a verificação do conteúdo projetado, como atualizar cálculos com base nesse conteúdo.

6. ngAfterViewInit

   - Para que serve: É chamado depois que o Angular inicializa as visualizações do componente e as visualizações filhas.

   - Explicação: Use este método quando precisar interagir com elementos do DOM após a inicialização da visualização.

7. ngAfterViewChecked

   - Para que serve: É chamado após cada verificação da visualização do componente.

   - Explicação: Útil para realizar ações após a verificação da visualização, como atualizar informações com base no estado atual da visualização.

8. ngOnDestroy

   - Para que serve: É chamado antes de um componente ser destruído.

   - Explicação: Útil para liberar recursos, cancelar assinaturas e executar tarefas de limpeza antes de um componente ser removido.
