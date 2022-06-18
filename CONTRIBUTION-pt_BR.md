  
<div  id="top"></div>

# Contribuindo com o Get Samurai

Português 🇧🇷 | [English 🇺🇸](./CONTRIBUTION.md)

Obrigado pelo seu interesse em contribuir com o Get Samurai ajudando a torná-lo ainda melhor do que é hoje! Como colaborar, aqui estão as diretrizes que gostaríamos que você seguisse:

- [Código de Conduta](#código-de-conduta)
- [Encontrou um Bug?](#encontrou-um-bug)
- [Falta um recurso?](#falta-um-recurso)
- [Diretrizes](#diretrizes)
- [Regras de Codificação](#regras-de-codificação)
- [Formato da mensagem de commit](#formato-da-mensagem-de-commit)

## Código de Conduta

Ajude-nos a manter o Get Samurai aberto e inclusivo. Por favor, leia e siga-o [Código de Conduta](./code-of-conduct-pt_BR.md) .

<p  align="right">(<a  href="#top"> voltar ao topo </a>)</p>

## Encontrou um Bug?

Se você encontrar um bug no código-fonte, você pode nos ajudar [abrindo uma issue](#como-abrir-uma-issue) no nosso [repositório GitHub](https://github.com/NatanaelBorges/getSamurai) . Ou melhor ainda, você pode [enviar um Pull Request](#como-enviar-uma-solicitação-pull-pr) com as correções.

<p  align="right">(<a  href="#top"> voltar ao topo </a>)</p>

## Falta um recurso?

Você pode _solicitar_ um novo recurso [abrindo uma issue](#como-abrir-uma-issue) ou se você desejar pode _implementar_ um novo recurso, considere o tamanho da alteração para determinar as etapas corretas a seguir. Segue as etapas:

- Para um **recurso principal (Major Feature)**, primeiro abra uma issue e descreva sua proposta para que ela possa ser discutida. Esse processo nos permite coordenar melhor nossos esforços, evitando desperdício de tempo/trabalho e ajudá-lo a elaborar a mudança para que ela seja aceita com sucesso no projeto.

**Nota** : Adicionar um novo tópico à documentação ou reescrever significativamente um tópico conta como um recurso importante.

- **Pequenos recursos (Small Features)** podem ser criados e [enviados diretamente como um Pull Request](#como-enviar-uma-solicitação-pull-pr) .

<p  align="right">(<a  href="#top"> voltar ao topo </a>)</p>

## Diretrizes

### Como abrir uma issue

Antes de abrir uma issue, dê uma pesquisada pois o problema pode já existir e a discussão pode informá-lo sobre soluções alternativas prontamente disponíveis.

Queremos corrigir todos as issue o mais rápido possível, mas antes de corrigir um bug, precisamos reproduzi-lo e confirmá-lo. Para reproduzir bugs, precisamos que você forneça uma reprodução mínima. Ter um cenário reproduzível mínimo nos dá uma riqueza de informações importantes sem ir e voltar para você com perguntas adicionais.

Infelizmente, não podemos investigar / corrigir bugs sem uma reprodução mínima, portanto, se não recebermos uma resposta, fecharemos todas as issue que não possuem informações suficientes.

<p  align="right">(<a  href="#top"> voltar ao topo </a>)</p>

### Como enviar uma solicitação pull (PR)

Antes de enviar seu Pull Request (PR), considere as seguintes diretrizes:

1. Pesquise no [GitHub](https://github.com/NatanaelBorges/getSamurai/pulls) um PR aberto ou fechado relacionado ao seu envio. Caso exista não será necessário abrir um novo.

2. Certifique-se de que uma issue descreva o problema que você está corrigindo ou documente o design do recurso que deseja adicionar. Discutir o design antecipadamente ajuda a garantir que estamos prontos para aceitar seu PR.

3. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) o repositório getSamurai e crie sua branch a partir do `main`  

4. Faça as alterações desejadas.

5. Se você adicionou um código que deve ser testado, adicione testes.  

6. Siga nossas [regras de codificação](#regras-de-codificação)  

7. Execute o conjunto de testes completo, conforme descrito e certifique-se de que todos os testes estejam passando, localmente ou no CI.  

8. Comite suas alterações usando um commit message descritivo, que segue nossa [commit message conventions](#formato-da-mensagem-de-commit). A adesão a essas convenções é necessária porque as notas de versão (changelog) são geradas automaticamente a partir dessas mensagens.  

9. Envie as alterações para o seu fork.  

10. No GitHub, crie uma pull request para o repositório `getSamurai:main`.  

11. Revise e aborde comentários em sua solicitação de pull  

Se tudo correr bem, sua solicitação pull será mergeada.

### Revisando uma solicitação pull

Nós reservamos no direito de não aceitar pull requests de membros da comunidade que não tenham sido bons cidadãos. Tal comportamento inclui não seguir o [código de conduta](./code-of-conduct-pt_BR.md).

  <p  align="right">(<a  href="#top"> voltar ao topo </a>)</p>

## Regras de codificação  

Para garantir a consistência em todo o código-fonte, lembre-se destas regras enquanto estiver trabalhando:

- Todos os recursos ou correções de bugs **devem ser testados** por uma ou mais especificações (testes de unidade).

- Todos os métodos de API públicos **devem ser documentados** .

- Seguimos [o Guia de estilo JavaScript do Google](https://google.github.io/styleguide/jsguide.html), mas agrupamos todo o código em **100 caracteres** .

  <p  align="right">(<a  href="#top"> voltar ao topo </a>)</p>

## Formato da mensagem de commit

Temos regras muito precisas sobre como nossas mensagens de commit do Git devem ser formatadas. Esse formato **facilita a leitura do histórico de commits** .

Cada mensagem de confirmação consiste em um **cabeçalho** , um **corpo** e um **rodapé** .

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

O `header`é obrigatório e deve está em conformidade com o formato do [cabeçalho da mensagem de confirmação .](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit-header)  

O `body`é obrigatório para todos os commits, exceto para os do tipo "docs". Quando o corpo estiver presente, ele deve ter pelo menos 20 caracteres e deve está de acordo com o formato [Commit Message Body](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit-body) .  

O `footer`é opcional. O formato [Commit Message Footer](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit-footer) descreve para que o rodapé é usado e a estrutura que ele deve ter.

#### Cabeçalho da Mensagem de Confirmação

```
<type>(<scope>): <short summary>
```  

Os campos `<type>` e `<summary>` são obrigatórios, o `(<scope>)` é opcional.  

##### Modelo  

Deve ser um dos seguintes:  

- **build** : Alterações que afetam o sistema de compilação ou dependências externas (escopos de exemplo: gulp, broccoli, npm)
- **ci** : Alterações em nossos arquivos e scripts de configuração de CI (exemplos: CircleCi, SauceLabs)
- **docs** : somente a documentação muda
- **feat** : Um novo recurso
- **correção** : uma correção de bug
- **perf** : Uma alteração de código que melhora o desempenho
- **refatorar** : Uma alteração de código que não corrige um bug nem adiciona um recurso
- **test** : Adicionando testes ausentes ou corrigindo testes existentes

##### Summary

Use o campo de summary para fornecer uma descrição sucinta da alteração:  

- use o imperativo, presente: "change" não "changed" nem "changes"
- não iniciar com a primeira letra maiúscula
- sem ponto (.) no final

#### Corpo da mensagem de confirmação (Body)

Assim como no summary, use o imperativo presente: "fix" e não "fixed" nem "fixes".

Explique a motivação para a mudança no corpo da mensagem de confirmação. Esta mensagem de confirmação deve explicar _por que_ você está fazendo a alteração. Você pode incluir uma comparação do comportamento anterior com o novo comportamento para ilustrar o impacto da mudança.

#### Rodapé da Mensagem de Confirmação (Footer)

O rodapé pode conter informações sobre alterações e descontinuações importantes e também é o local para fazer referência a issues do GitHub ou outros PRs aos quais esse commit está relacionado. Por exemplo:

```
BREAKING CHANGE: <breaking change summary>

<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

ou

```
DEPRECATED: <what is deprecated>

<BLANK LINE>
<deprecation description + recommended update path>
<BLANK LINE>
<BLANK LINE>
Closes #<pr number>
```

A seção de Breaking Change deve começar com a frase "BREAKING CHANGE: " seguida por um resumo da mudança importante, uma linha em branco e uma descrição detalhada que também inclui instruções de migração.

Da mesma forma, uma seção de descontinuação deve começar com "DEPRECATED: " seguido por uma breve descrição do que está obsoleto, uma linha em branco e uma descrição detalhada da suspensão que também menciona o caminho de atualização recomendado.

Caso queira saber mais sobre formato da mensagem de commit, veja [convenção de commit do Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

<p  align="right">(<a  href="#top"> voltar ao topo </a>)</p>
