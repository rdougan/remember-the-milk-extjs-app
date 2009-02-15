var MyApp = {};

/**
 * @class MyApp.OS
 * @extends Ext.ux.MVC.OS
 */
MyApp.OS = Ext.extend(Ext.ux.MVC.OS, {
  name:            "MyApp",
  usesHistory:     true,
  viewportBuilder: "leftmenu",
  
  getViewportBuilderConfig: function() {
    return {
      menu: {
        items: [
          this.router.linkTo({controller: 'index', action: 'index'}, {text: 'Welcome'})
        ]
      },
      useTabs: false
    };
  }
});

MyApp.OS = new MyApp.OS();