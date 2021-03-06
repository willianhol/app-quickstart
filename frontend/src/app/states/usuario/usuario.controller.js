(function() {
    'use strict';

    angular
      .module('gohd')
      .controller('UsuarioController', UsuarioController);

    /** @ngInject */
    function UsuarioController(usuarioService, $log) {
      var vm = this;

      vm.salvar = salvarFn;
      vm.usuarios = [];

      buscarUsuarios();

      function salvarFn(usuario) {
        usuarioService.adicionarUsuario(usuario).then(
          function(data) {
            vm.usuarios.push(data);
            delete vm.usuario;
          },
          function(e) {
            $log.debug("Ocorreu um erro ao salvar um usuario: " + e);
          }
        );

      }

      function buscarUsuarios() {
        usuarioService.buscarUsuarios().then(
          function(data) {
            vm.usuarios = data;
          },
          function(e) {
            $log.debug("Ocorreu um erro ao buscar os usuarios cadastrados: " + e);
          }
        );
      }

  }

})();
