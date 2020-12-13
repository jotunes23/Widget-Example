define(
  // Dependências
  ['jquery', 'knockout', 'CCi18n'],

  // Implementação do Módulo
  function ($, ko, CCi18n) {
    'use strict';

    // Funções e variáveis privadas
    var privateVarExample = 'My private Variable';

    return {
      // Funções e variáveis públicas
      WIDGET_ID: 'DRVTeste',
      userName: ko.observable(),

      onLoad: function (widget) {
        var self = this;

        /* Contexto completo do Widget com Models comuns úteis
        como: user, cart, site, pageContext, etc... */
        console.log('On Load Widget\n', widget);

        /* Contexto com as funções e variáveis públicas do Widget,
        basicamente tudo o que esta dentro do 'return' */
        console.log('On Load this\n', self);

        // Definindo a observable userName através da ViewModel 'user'
        widget.userName = ko.pureComputed(function () {
          return widget.user().firstName;
        });

        // Método de exemplo no on load
        widget.onLoadExample();
      },

      beforeAppear: function (page) {
        var widget = this;

        // Contexto com informações úteis sobre a página atual
        console.log('beforeAppear page\n', page);

        /* Contexto completo do Widget com Models comuns úteis
        como: user, cart, site, pageContext, etc... */
        console.log('beforeAppear this\n', widget);

        // Método de exemplo no before appear
        widget.beforeAppearExample();
      },

      handleButton: function () {
        alert(CCi18n.t('ns.teste:resources.buttonAction'));
      },

      onRenderExample: function () {
        console.log('On Render Example!');
      },

      onLoadExample: function () {
        console.log('On Load example: ', privateVarExample);
      },

      beforeAppearExample: function () {
        console.log('Before Appear Example!');
      }
    };
  }
);