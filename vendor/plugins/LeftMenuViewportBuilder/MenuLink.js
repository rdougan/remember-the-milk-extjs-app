/**
 * FIXME: ugh, don't code tired, you write shit like this:
 * 
 * @class Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuLink
 * @extends Ext.Component
 * Renders a basic link which fires an event when clicked
 */
Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuLink = function(config) {
  var config = config || {};
 
  Ext.applyIf(config, {
    html: '<a href="#' + config.url + '" cls="' + config.cls + '">' + config.text + '</a>'
  });
  
  config.cls += ' x-menu-link';
  delete config.xtype ;
  delete config.url;
  delete config.text;
 
  Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuLink.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuLink, Ext.Component, {
  
  onRender: function(ct, position) {
    this.el = ct.createChild(this.initialConfig);
    
    this.el.on('click', this.initialConfig.handler, this);
    
    Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuLink.superclass.onRender.apply(this, arguments);
  }
});

Ext.reg('menu_link', Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuLink);