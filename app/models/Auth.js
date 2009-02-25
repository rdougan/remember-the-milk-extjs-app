/**
 * @class RTM.models.Auth
 * @extends Ext.ux.MVC.Model
 */
Ext.ux.MVC.Model.define("RTM.models.Auth", {
  modelName: 'auth',
  reader: new Ext.data.XmlReader({
    row: 'auth'
  }, task),
  fields:    [
    {name: 'token', type: 'string'},
    {name: 'perms', type: 'string'},
    {name: 'user_id', type: 'int', mapping: 'user@id'},
  ]
});