/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "z10/gerenciarparceiros/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("z10.gerenciarparceiros.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                this.getRouter().attachBeforeRouteMatched(this.aoNavegar, this);

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //cria modelo de Layout para o Flexible Column Layout
                let oModeloLayout = new JSONModel();

                //cria uma propriedade que esta vinculada na App.view.xml e associa o valor OneColumn
                //para iniciar o app com apenas uma coluna visivel
                oModeloLayout.setProperty("/modoDeExibicao", "OneColumn");

                //associa o modelo no Component.js com o nome layout
                this.setModel(oModeloLayout, "layout");

                
            },

            aoNavegar: function(oEvent){
                //resgata o nome da rota
                let sNomeDaRota = oEvent.getParameters().name;

                //guarda o valor do layout
                let sLayout;

                switch(sNomeDaRota){
                    //quando for a rota principal, mostrar apenas a lista
                    case "RouteListaParceiros":
                        sLayout = "OneColumn";
                        break;
                    //quando for a rota de detalhe de um parceiro, dividir a tela em duas e expandir o meio
                    case "RouteDetalheParceiro":
                        sLayout = "TwoColumnsMidExpanded"
                        break;
                }

                //resgatar o modelo de layout
                let oModeloLayout = this.getModel("layout");
                //altera a propriedade modoDeExibicao para mudar o visual (binding esta no app.view.xml)
                oModeloLayout.setProperty("/modoDeExibicao", sLayout);

            }

        });
    }
);