dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
appMenuTipo_IdentificacionClick: function(inSender /*,args*/) {
this.usertypeLiveVariable1.update();
},
appMenuTipo_UsuarioClick: function(inSender /*,args*/) {
this.documenttypeLiveVariable1.update();
},
rep1ButtonClick: function(inSender) {
var id_empresa = this.empresaSelect2.getDataValue();
url= "services/manco_rep2.download?method=getReport&idempresa="+id_empresa;
window.open(url,"_BLANK");
},
rep2ButtonClick: function(inSender) {
var id_usuario = this.userSelect3.getDataValue();
url= "services/manco_rep3.download?method=getReport&idempresa="+id_usuario;
window.open(url,"_BLANK");
},
_end: 0
});

Main.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
tenantLiveVariable1: ["wm.LiveVariable", {"type":"com.mancodb.data.Tenant"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mancodb.data.Tenant","view":[
{"caption":"Idtenant","sortable":true,"dataIndex":"idtenant","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"TenantName","sortable":true,"dataIndex":"tenantName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"DniTenant","sortable":true,"dataIndex":"dniTenant","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Country","sortable":true,"dataIndex":"country","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Telephone","sortable":true,"dataIndex":"telephone","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}
]}, {}]
}],
gotoTenant: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tenant_layer","targetProperty":"layer"}, {}]
}]
}]
}],
gotoUsers: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"users_layer","targetProperty":"layer"}, {}]
}]
}]
}],
gotoHome: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"home_layer","targetProperty":"layer"}, {}]
}]
}]
}],
gotoReports: ["wm.NavigationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"reports_layer","targetProperty":"layer"}, {}]
}]
}]
}],
usertypeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"type":"com.mancodb.data.UserType"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mancodb.data.UserType","view":[
{"caption":"IduserType","sortable":true,"dataIndex":"iduserType","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"UserType","sortable":true,"dataIndex":"userType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
documenttypeLiveVariable1: ["wm.LiveVariable", {"type":"com.mancodb.data.DocumentType"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mancodb.data.DocumentType","view":[
{"caption":"IddocumentType","sortable":true,"dataIndex":"iddocumentType","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"DocumentType","sortable":true,"dataIndex":"documentType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
userReportsLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","maxResults":50,"startUpdate":false,"type":"com.mancodb.data.Users"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"empresaSelect3.dataValue","targetProperty":"filter.tenantId"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.mancodb.data.Users","view":[
{"caption":"Idusers","sortable":true,"dataIndex":"idusers","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"NoDocument","sortable":true,"dataIndex":"noDocument","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Lastname","sortable":true,"dataIndex":"lastname","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"User","sortable":true,"dataIndex":"user","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Pwd","sortable":true,"dataIndex":"pwd","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"CreatedDate","sortable":true,"dataIndex":"createdDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"UpdatedDate","sortable":true,"dataIndex":"updatedDate","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"TenantId","sortable":true,"dataIndex":"tenantId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}]
}],
tenantDialog: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"350px","height":"350px","title":"Empresas","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
tenantLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"202px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"tenantLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tenantDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idtenantEditor1: ["wm.Number", {"caption":"Cod. Interno","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"idtenant","height":"32px","required":true,"width":"100%"}, {}],
tenantNameEditor1: ["wm.Text", {"caption":"Nombre de Empresa","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"tenantName","height":"32px","maxChars":45,"placeHolder":"Ej. COOL4CODE S.A.S","required":true,"width":"100%"}, {}],
dniTenantEditor1: ["wm.Number", {"caption":"Id Empresa","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"dniTenant","height":"32px","placeHolder":"Ej. 98654723-9","width":"100%"}, {}],
countryEditor1: ["wm.Text", {"caption":"País ubicación","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"country","height":"32px","maxChars":45,"placeHolder":"Panama","width":"100%"}, {}],
addressEditor1: ["wm.Text", {"caption":"Dirección","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"address","height":"32px","maxChars":45,"placeHolder":"Ej. World Trade Center Ofi. 405 ","width":"100%"}, {}],
telephoneEditor1: ["wm.Text", {"caption":"Teléfono","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"telephone","height":"32px","maxChars":45,"placeHolder":"Ej. 749 6000","width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"60px","mobileHeight":"60px"}, {}, {
tenantSaveButton: ["wm.Button", {"border":"1","caption":"Guardar","height":"30px"}, {"onclick":"tenantLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tenantLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
tenantCancelButton: ["wm.Button", {"border":"1","caption":"Cancelar","height":"30px"}, {"onclick":"tenantDialog.hide","onclick1":"tenantLiveForm1.cancelEdit"}]
}]
}],
TipoUsuariosDialog1: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar1","containerWidgetId":"containerWidget1","desktopHeight":"500px","height":"500px","styles":{},"title":"Tipo Usuarios"}, {}, {
containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
usertypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
usertypeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["gridCursor"]},"columns":[
{"show":false,"field":"iduserType","title":"IduserType","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"userType","title":"Tipo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Tipo: \" + ${userType} +\n\"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.mancodb.data.UserType","height":"100%","localizationStructure":{},"minDesktopHeight":60,"styles":{},"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usertypeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
usertypeLiveForm1: ["wm.LiveForm", {"autoScroll":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"usertypeLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usertypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
iduserTypeEditor1: ["wm.Number", {"caption":"Id Tipo","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"iduserType","height":"32px","readonly":true,"required":true,"width":"100%"}, {}],
userTypeEditor1: ["wm.Text", {"caption":"Tipo","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"userType","height":"32px","maxChars":45,"readonly":true,"width":"100%"}, {}],
usertypeSpacer: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
usertypeLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"usertypeLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Guardar","height":"100%"}, {"onclick":"usertypeLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usertypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"border":"1","caption":"Cancelar","height":"100%"}, {"onclick":"usertypeLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"border":"1","caption":"Nuevo","height":"100%"}, {"onclick":"usertypeLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"border":"1","caption":"Actualizar","height":"100%"}, {"onclick":"usertypeLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usertypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"border":"1","caption":"Borrar","height":"100%"}, {"onclick":"usertypeLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usertypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
buttonBar1: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"60px"}, {}, {
closeTipoUsuariosDialog: ["wm.Button", {"_classes":{"domNode":["Danger"]},"border":"1","borderColor":"#bd362f","caption":"[X] Cerrar","height":"30px"}, {"onclick":"TipoUsuariosDialog1.hide"}]
}]
}],
TipoDocumentoDialog1: ["wm.DesignableDialog", {"border":"1","buttonBarId":"buttonBar2","containerWidgetId":"containerWidget2","desktopHeight":"500px","height":"500px","title":"Tipo Documento"}, {}, {
containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
documenttypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
documenttypeDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"iddocumentType","title":"IddocumentType","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"documentType","title":"Tipo Documento","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Tipo Documento: \" + ${documentType} +\n\"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.mancodb.data.DocumentType","height":"100%","minDesktopHeight":60,"width":"200px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"documenttypeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
documenttypeLiveForm1: ["wm.LiveForm", {"autoScroll":true,"height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"documenttypeLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documenttypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
iddocumentTypeEditor1: ["wm.Number", {"caption":"Id Tipo Documento","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"zero","formField":"iddocumentType","height":"32px","readonly":true,"required":true,"width":"100%"}, {}],
documentTypeEditor1: ["wm.Text", {"caption":"Documento","captionAlign":"right","captionSize":"140px","changeOnKey":true,"desktopHeight":"32px","emptyValue":"emptyString","formField":"documentType","height":"32px","maxChars":45,"readonly":true,"width":"100%"}, {}],
documenttypeSpacer: ["wm.Spacer", {"height":"100%","width":"10px"}, {}],
documenttypeLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"documenttypeLiveForm1","lock":false,"operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton2: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"border":"1","caption":"Guardar","height":"100%"}, {"onclick":"documenttypeLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documenttypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton2: ["wm.Button", {"border":"1","caption":"Cancelar","height":"100%"}, {"onclick":"documenttypeLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton2: ["wm.Button", {"border":"1","caption":"Nuevo","height":"100%"}, {"onclick":"documenttypeLiveForm1EditPanel.beginDataInsert"}],
updateButton2: ["wm.Button", {"border":"1","caption":"Actualizar","height":"100%"}, {"onclick":"documenttypeLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documenttypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton2: ["wm.Button", {"border":"1","caption":"Borrar","height":"100%"}, {"onclick":"documenttypeLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"documenttypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
buttonBar2: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","desktopHeight":"60px","height":"60px"}, {}, {
closeTipoDocDialog: ["wm.Button", {"_classes":{"domNode":["Danger"]},"border":"1","borderColor":"#bd362f","caption":"[X] Cerrar","height":"30px"}, {"onclick":"TipoDocumentoDialog1.hide"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"border":"0,1,0,0","borderColor":"#999999","height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
panel2: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","lock":true,"padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"aspect":"h","height":"50px","source":"http://www.mancoltda.com.co/images/sampledata/icetheme/logo.png","width":"254px"}, {}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","styles":{},"verticalAlign":"middle","width":"300px"}, {}, {
panel15: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"middle","width":"100%"}, {}, {
text1: ["wm.Text", {"dataValue":undefined,"desktopHeight":"32px","displayValue":"","height":"32px","placeHolder":"Search","resetButton":true,"styles":{},"width":"100%"}, {}],
picture5: ["wm.Picture", {"height":"22px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
}]
}],
logoutButton: ["wm.Button", {"border":"1","caption":"Salir","height":"30px","imageIndex":42,"imageList":"app.silkIconList","margin":"2","styles":{}}, {"onclick":"varTemplateLogout"}]
}],
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
left_menu: ["wm.Panel", {"height":"100%","horizontalAlign":"left","lock":true,"verticalAlign":"top","width":"120px"}, {}, {
appMenu: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"border":"1","fullStructure":[
{"label":"Inicio","separator":undefined,"defaultLabel":"Inicio","iconClass":"app_silkIconList_58","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"gotoHome","children":[]},
{"label":"Empresas","separator":undefined,"defaultLabel":"Empresas","iconClass":"app_silkIconList_79","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"gotoTenant","children":[]},
{"label":"Usuarios","separator":undefined,"defaultLabel":"Usuarios","iconClass":"app_silkIconList_54","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"gotoUsers","children":[]},
{"label":"Reportes","separator":undefined,"defaultLabel":"Reportes","iconClass":"app_silkIconList_23","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"gotoReports","children":[]},
{"label":"Extras","separator":undefined,"defaultLabel":"Extras","iconClass":"app_silkIconList_49","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Tipo Identificacion","separator":undefined,"defaultLabel":"Tipo Identificacion","iconClass":"app_silkIconList_17","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"appMenuTipo_IdentificacionClick","children":[],"onClick1":"TipoDocumentoDialog1.show"},
{"label":"Tipo Usuario","separator":undefined,"defaultLabel":"Tipo Usuario","iconClass":"app_silkIconList_10","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":"appMenuTipo_UsuarioClick","children":[],"onClick1":"TipoUsuariosDialog1.show"}
]}
],"height":"100%","localizationStructure":{},"padding":"20,0,0,0","styles":{},"transparent":false,"vertical":true}, {}]
}],
panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
home_layer: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Inicio","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
dashboard1: ["wm.Dashboard", {"margin":"4","styles":{},"portlets":[
{"id":"portlet","title":"Total empresas (demo)","page":"Dash1","isOpen":true,"isClosable":false,"x":0,"y":0}
]}, {}]
}],
tenant_layer: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Empresas","horizontalAlign":"left","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
tenantLivePanel1: ["wm.LivePanel", {"_classes":{"domNode":["gridCursor"]},"autoScroll":false,"horizontalAlign":"left","lock":true,"styles":{},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tenantDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"tenantLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"tenantDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"tenantSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
tenantDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idtenant","title":"Cod. Interno","width":"80px","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"tenantName","title":"Empresa","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"dniTenant","title":"DNI Empresa","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"country","title":"País","width":"130px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"address","title":"Address","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"telephone","title":"Telephone","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cod. Interno: \" + ${idtenant} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Empresa: \" + ${tenantName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"DNI Empresa: \" + ${dniTenant}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"País: \" + ${country}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.mancodb.data.Tenant","height":"100%","localizationStructure":{},"minDesktopHeight":60}, {"onCellDblClick":"tenantLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tenantLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
tenantGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"30px","verticalAlign":"top","width":"100%"}, {}, {
tenantNewButton: ["wm.Button", {"border":"1","caption":"Nuevo","height":"30px"}, {"onclick":"tenantLivePanel1.popupLivePanelInsert"}],
tenantUpdateButton: ["wm.Button", {"border":"1","caption":"Actualizar","height":"30px"}, {"onclick":"tenantLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tenantDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
tenantDeleteButton: ["wm.Button", {"border":"1","caption":"Borrar","height":"30px"}, {"onclick":"tenantLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tenantDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
users_layer: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Usuarios","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageUsuarios: ["wm.PageContainer", {"deferLoad":true,"pageName":"Usuarios","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
reports_layer: ["wm.Layer", {"border":"1","borderColor":"#dddddd","caption":"Reportes","horizontalAlign":"center","padding":"5","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
accordionLayers1: ["wm.AccordionLayers", {"border":"0","styles":{}}, {}, {
rep1: ["wm.Layer", {"border":"1","borderColor":"#e5e5e5","caption":"1. Reporte General","horizontalAlign":"left","padding":"10","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
empresaSelect4: ["wm.SelectMenu", {"caption":"Empresa","dataField":"idtenant","dataType":"com.mancodb.data.Tenant","dataValue":undefined,"disabled":true,"displayField":"tenantName","displayValue":"","height":"30px","styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tenantLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
button1: ["wm.Button", {"border":"1","caption":"Generar y Guardar","desktopHeight":"36px","disabled":true,"height":"36px","imageIndex":41,"imageList":"app.silkIconList","styles":{},"width":"300px"}, {}]
}],
rep2: ["wm.Layer", {"border":"1","borderColor":"#e5e5e5","caption":"2. Reporte: Estado ordenes de servicio","horizontalAlign":"left","padding":"10","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
empresaSelect2: ["wm.SelectMenu", {"caption":"Empresa","dataField":"idtenant","dataType":"com.mancodb.data.Tenant","dataValue":undefined,"displayField":"tenantName","displayValue":"","height":"30px","styles":{},"width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tenantLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
rep1Button: ["wm.Button", {"border":"1","caption":"Generar y Guardar","desktopHeight":"36px","height":"36px","imageIndex":41,"imageList":"app.silkIconList","styles":{},"width":"300px"}, {"onclick":"rep1ButtonClick"}]
}],
rep3: ["wm.Layer", {"border":"1","borderColor":"#e5e5e5","caption":"3. Reporte: Ordenes por Técnico","horizontalAlign":"left","padding":"10","styles":{},"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
empresaSelect3: ["wm.SelectMenu", {"caption":"Empresa","dataField":"idtenant","dataType":"com.mancodb.data.Tenant","dataValue":undefined,"displayField":"tenantName","displayValue":"","height":"30px","styles":{},"width":"300px"}, {"onchange":"userReportsLiveVariable"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tenantLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
userSelect3: ["wm.SelectMenu", {"caption":"Usuarios","dataField":"idusers","dataType":"com.mancodb.data.Users","dataValue":undefined,"displayExpression":"${name}+\" \"+${lastname}","displayField":"name","displayValue":"","height":"30px","width":"300px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userReportsLiveVariable","targetProperty":"dataSet"}, {}]
}]
}],
rep2Button: ["wm.Button", {"border":"1","caption":"Generar y Guardar","desktopHeight":"36px","height":"36px","imageIndex":15,"imageList":"app.silkIconList","width":"300px"}, {"onclick":"rep2ButtonClick"}]
}],
rep4: ["wm.Layer", {"border":"1","borderColor":"#e5e5e5","caption":"4. Reporte: Técnico por Proyecto","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
layer5: ["wm.Layer", {"border":"1","borderColor":"#e5e5e5","caption":"5. Reporte: Proyecto general","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}]
}]
}]
}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label2: ["wm.Label", {"caption":"Desarrollado por COOL4CODE","padding":"4","styles":{"fontSize":"10px"}}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Manco LDTA 2014 ","height":"100%","padding":"4","styles":{},"width":"100%"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';