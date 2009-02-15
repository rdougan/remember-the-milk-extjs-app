/**
 * @class MyApp.controllers.IndexController
 * @extends Ext.ux.MVC.Controller
 * Default root controller
 */
MyApp.controllers.IndexController = Ext.extend(Ext.ux.MVC.Controller, {
  constructor: function() {
    //super
    MyApp.controllers.IndexController.superclass.constructor.call(this, {
      viewsPackage: MyApp.views.index
    });
  }
});

Ext.ux.MVC.OS.getOS().registerController('index', MyApp.controllers.IndexController);

Ext.ns('MyApp.views.index');