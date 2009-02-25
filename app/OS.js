var RTM = {};

/**
 * @class RTM.OS
 * @extends ExtMVC.OS
 */
RTM.OS = Ext.extend(ExtMVC.OS, {
  name:            "RTM",
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

RTM.OS = new RTM.OS();