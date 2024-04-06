sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("z10.gerenciarparceiros.controller.ListaParceiros", {
            onInit: function () {

            },

            aoSelecionarParceiro: function(oevent){
                //resgata o item clicado
                let oItem = oEvent.getParameters().listItem;

                //usa o contexto de binding para acessar o item no modelo principal
                let oItemDoModelo = oItem.getBindingContext().getObject();

                //guarda o ID do parceiro para usar na navegacao
                let IdDoParceiro = oItemDoModelo.PartnerId;

                //realiza a navegacao
                let oRoteador = this.getOwnerComponent().getRouter();
                oRoteador.navTo("");

            }
        });
    });
