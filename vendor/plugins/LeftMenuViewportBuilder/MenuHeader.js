/**
 * @class Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuHeader
 * @extends Ext.Component
 * Renders a header divider element in a menu
 */
Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuHeader = function(config) {
  var config = config || {};
 
  Ext.applyIf(config, {
    title: 'Header'
  });
 
  Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuHeader.superclass.constructor.call(this, config);
};
Ext.extend(Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuHeader, Ext.Component, {
  /**
   * Renders the HTML for this component
   * @param {Ext.Container} ct The container to render this component to
   * @param {Number} position The position within the parent container to render this component to
   */
  onRender: function(ct, position) {
    this.el = ct.createChild({
      tag: 'h1',
      cls: 'x-menu-header',
      html: this.initialConfig.title
    });
  
    Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuHeader.superclass.onRender.apply(this, arguments);
  }
});

Ext.reg('menu_header', Ext.ux.MVC.plugin.LeftMenuViewportBuilder.MenuHeader);