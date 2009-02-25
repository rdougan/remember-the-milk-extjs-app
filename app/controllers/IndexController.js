/**
 * @class RTM.controllers.IndexController
 * @extends ExtMVC.Controller
 * Default root controller
 */
RTM.controllers.IndexController = Ext.extend(ExtMVC.Controller, {
  constructor: function() {
    //super
    RTM.controllers.IndexController.superclass.constructor.call(this, {
      viewsPackage: RTM.views.index
    });
  }
});

ExtMVC.OS.getOS().registerController('index', RTM.controllers.IndexController);

Ext.ns('RTM.views.index');