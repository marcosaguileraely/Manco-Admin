dojo.declare("Usuarios", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
usersLiveForm1BeginInsert: function(inSender) {
var now = new Date().getTime();
this.createdDateEditor1.setDataValue(now);
this.updatedDateEditor1.setDataValue(now);
},
usersLiveForm1BeginUpdate: function(inSender) {
var now = new Date().getTime();
this.updatedDateEditor1.setDataValue(now);
},
ver_claveButtonClick: function(inSender) {
var pwd = this.usersDojoGrid.selectedItem.getData().pwd;
alert("La clave del usuario seleccionado:\n\n"+pwd);
},
usersDojoGridSelect: function(inSender) {
this.ver_claveButton.enable();
},
button1Click: function(inSender) {
this.EmpresaSelectMenu1.clear();
this.usersLiveVariable1.clearData();
},
_end: 0
});

Usuarios.widgets = {
usersLiveVariable1: ["wm.LiveVariable", {"type":"com.mancodb.data.Users"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mancodb.data.Users","related":["documentType","userType"],"view":[
{"caption":"Idusers","sortable":true,"dataIndex":"idusers","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NoDocument","sortable":true,"dataIndex":"noDocument","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Lastname","sortable":true,"dataIndex":"lastname","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"User","sortable":true,"dataIndex":"user","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Pwd","sortable":true,"dataIndex":"pwd","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"CreatedDate","sortable":true,"dataIndex":"createdDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"UpdatedDate","sortable":true,"dataIndex":"updatedDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"TenantId","sortable":true,"dataIndex":"tenantId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null},
{"caption":"IddocumentType","sortable":true,"dataIndex":"documentType.iddocumentType","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DocumentType","sortable":true,"dataIndex":"documentType.documentType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"IduserType","sortable":true,"dataIndex":"userType.iduserType","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"UserType","sortable":true,"dataIndex":"userType.userType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"EmpresaSelectMenu1.dataValue","targetProperty":"filter.tenantId"}, {}]
}]
}],
tipoIdentificacionLV: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","type":"com.mancodb.data.DocumentType"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mancodb.data.DocumentType","view":[
{"caption":"IddocumentType","sortable":true,"dataIndex":"iddocumentType","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DocumentType","sortable":true,"dataIndex":"documentType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
tipoUsuarioLV: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","type":"com.mancodb.data.UserType"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mancodb.data.UserType","view":[
{"caption":"IduserType","sortable":true,"dataIndex":"iduserType","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"UserType","sortable":true,"dataIndex":"userType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
listaEmpresasLV: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","type":"com.mancodb.data.Tenant"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mancodb.data.Tenant","view":[
{"caption":"DniTenant","sortable":true,"dataIndex":"dniTenant","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Country","sortable":true,"dataIndex":"country","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Telephone","sortable":true,"dataIndex":"telephone","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"Idtenant","sortable":true,"dataIndex":"idtenant","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},
{"caption":"TenantName","sortable":true,"dataIndex":"tenantName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"}
]}, {}]
}],
usersDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"440px","height":"440px","title":"Usuarios","width":"580px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
usersLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"292px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"usersLiveForm1BeginInsert","onBeginUpdate":"usersLiveForm1BeginUpdate","onSuccess":"usersLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usersDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idusersEditor1: ["wm.Number", {"caption":"Cod. Usuario","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"idusers","height":"32px","required":true,"width":"100%"}, {}],
tenantSelectMenu: ["wm.SelectMenu", {"caption":"TenantId","captionAlign":"right","captionSize":"140px","dataField":"idtenant","dataType":"com.mancodb.data.Tenant","desktopHeight":"32px","displayField":"tenantName","formField":"tenantId","height":"32px","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"listaEmpresasLV","targetProperty":"dataSet"}, {}]
}]
}],
documentTypeLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Tipo Documento","captionAlign":"right","captionSize":"140px","dataType":"com.mancodb.data.DocumentType","displayField":"documentType","formField":"documentType","height":"30px","placeHolder":"Ej. Cedula Ciudadanía","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"documentTypeLookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"tipoIdentificacionLV","targetProperty":"dataSet"}, {}]
}]
}],
noDocumentEditor1: ["wm.Number", {"caption":"NoDocument","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"noDocument","height":"32px","placeHolder":"Ej. 1098789234","required":true,"width":"100%"}, {}],
userTypeLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"Rol","captionAlign":"right","captionSize":"140px","dataType":"com.mancodb.data.UserType","displayField":"userType","formField":"userType","height":"30px","placeHolder":"Ej. Supervisor de Mantenimiento","required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"userTypeLookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"tipoUsuarioLV","targetProperty":"dataSet"}, {}]
}]
}],
nameEditor1: ["wm.Text", {"caption":"Nombres","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"name","height":"32px","maxChars":45,"placeHolder":"Ej. Michael","required":true,"width":"100%"}, {}],
lastnameEditor1: ["wm.Text", {"caption":"Apellidos","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"lastname","height":"32px","maxChars":45,"placeHolder":"Jackson","required":true,"width":"100%"}, {}],
userEditor1: ["wm.Text", {"caption":"Usuario","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"user","height":"32px","maxChars":10,"placeHolder":"Ej. fooBar","required":true,"width":"100%"}, {}],
pwdEditor1: ["wm.Text", {"caption":"Clave","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"pwd","height":"32px","maxChars":45,"password":true,"placeHolder":"********","required":true,"width":"100%"}, {}],
createdDateEditor1: ["wm.DateTime", {"caption":"CreatedDate","captionAlign":"right","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"createdDate","height":"32px","showing":false,"width":"100%"}, {}],
updatedDateEditor1: ["wm.DateTime", {"caption":"UpdatedDate","captionAlign":"right","captionSize":"140px","dateMode":"Date","desktopHeight":"32px","emptyValue":"zero","formField":"updatedDate","height":"32px","showing":false,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"60px"}, {}, {
usersSaveButton: ["wm.Button", {"border":"1","caption":"Guardar","height":"30px"}, {"onclick":"usersLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
usersCancelButton: ["wm.Button", {"border":"1","caption":"Cancelar","height":"30px"}, {"onclick":"usersDialog.hide","onclick1":"usersLiveForm1.cancelEdit"}]
}]
}],
empresasLoadingDialog: ["wm.LoadingDialog", {"caption":"Cargando datos...","captionWidth":"120px","serviceVariableToTrack":["listaEmpresasLV","tipoUsuarioLV","tipoIdentificacionLV","usersLiveVariable1"]}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usersDojoGrid","targetProperty":"widgetToCover"}, {}]
}]
}],
usuariosLayoutBox: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
usersLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"usersLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"usersDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"usersSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
EmpresaSelectMenu1: ["wm.SelectMenu", {"caption":"Empresa","captionAlign":"right","dataField":"idtenant","dataType":"com.mancodb.data.Tenant","dataValue":undefined,"desktopHeight":"34px","displayField":"tenantName","displayValue":"","height":"34px","width":"300px"}, {"onchange":"usersLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"listaEmpresasLV","targetProperty":"dataSet"}, {}]
}]
}],
button1: ["wm.Button", {"border":"1","caption":undefined,"desktopHeight":"33px","height":"33px","imageIndex":35,"imageList":"app.silkIconList","width":"60px"}, {"onclick":"button1Click"}]
}],
usersDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["gridCursor"]},"columns":[
{"show":true,"field":"idusers","title":"Cod. usuario","width":"80px","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"noDocument","title":"No. documento","width":"120px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"name","title":"Nombres","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"lastname","title":"Apellidos","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"user","title":"Usuario","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"pwd","title":"Clave","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"createdDate","title":"Creado","width":"90px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"updatedDate","title":"UpdatedDate","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},
{"show":false,"field":"tenantId","title":"TenantId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"documentType.iddocumentType","title":"IddocumentType","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"documentType.documentType","title":"DocumentType","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"userType.iduserType","title":"IduserType","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"userType.userType","title":"UserType","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cod. usuario: \" + ${idusers} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"No. documento: \" + ${noDocument}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombres: \" + ${name}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Apellidos: \" + ${lastname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Usuario: \" + ${user}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Creado: \" + ${wm.runtimeId}.formatCell(\"createdDate\", ${createdDate}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.mancodb.data.Users","height":"100%","minDesktopHeight":60,"styles":{}}, {"onCellDblClick":"usersLivePanel1.popupLivePanelEdit","onSelect":"usersDojoGridSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usersLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
usersGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
ver_claveButton: ["wm.Button", {"_classes":{"domNode":["Success"]},"border":"1","borderColor":"#51a351","caption":"Ver Clave","disabled":true,"height":"30px"}, {"onclick":"ver_claveButtonClick"}],
usersNewButton: ["wm.Button", {"border":"1","caption":"Nuevo","height":"30px"}, {"onclick":"usersLivePanel1.popupLivePanelInsert"}],
usersUpdateButton: ["wm.Button", {"border":"1","caption":"Actualizar","height":"30px"}, {"onclick":"usersLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
usersDeleteButton: ["wm.Button", {"border":"1","caption":"Borrar","height":"30px"}, {"onclick":"usersLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usersDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

Usuarios.prototype._cssText = '';
Usuarios.prototype._htmlText = '';