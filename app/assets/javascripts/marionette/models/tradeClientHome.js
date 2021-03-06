HousePad.TradeApp.module("Models", function(Models, TradeApp, Backbone, Marionette, $, _){

    Models.TradeClientHome = Backbone.Model.extend({
        urlRoot: "/houses"
    });

    // Subscribe to a new request on the models:session channel
    Backbone.Radio.reply("models:trade_client", "new", function(){
        return new Models.TradeClient();
    });

});