dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
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
tenantDialog: ["wm.DesignableDialog", {"border":"1","desktopHeight":"350px","height":"350px","title":"Empresas","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
tenantLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"200px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"tenantLivePanel1.popupLiveFormSuccess"}, {
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
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#eeeeee","height":"60px"}, {}, {
tenantSaveButton: ["wm.Button", {"border":"1","caption":"Guardar","height":"30px"}, {"onclick":"tenantLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tenantLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
tenantCancelButton: ["wm.Button", {"border":"1","caption":"Cancelar","height":"30px"}, {"onclick":"tenantDialog.hide","onclick1":"tenantLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"border":"0,1,0,0","borderColor":"#999999","height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
panel2: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
label3: ["wm.Label", {"caption":"Manco LTDA","height":"35px","padding":"4","width":"100%"}, {}],
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"300px"}, {}, {
panel15: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"middle","width":"100%"}, {}, {
text1: ["wm.Text", {"dataValue":undefined,"displayValue":"","height":"30px","placeHolder":"Search","resetButton":true,"width":"100%"}, {}],
picture5: ["wm.Picture", {"height":"22px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
}]
}],
logoutButton: ["wm.Button", {"border":"1","caption":"Salir","imageIndex":64,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"varTemplateLogout"}]
}],
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"120px"}, {}, {
appMenu: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"border":"1","fullStructure":[
{"label":"Inicio","separator":undefined,"defaultLabel":"Inicio","iconClass":"app_silkIconList_58","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Empresas","separator":undefined,"defaultLabel":"Empresas","iconClass":"app_silkIconList_79","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Usuarios","separator":undefined,"defaultLabel":"Usuarios","iconClass":"app_silkIconList_54","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Reportes","separator":undefined,"defaultLabel":"Reportes","iconClass":"app_silkIconList_23","imageList":"app.silkIconList","idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
],"height":"100%","localizationStructure":{},"padding":"20,0,0,0","styles":{},"transparent":false,"vertical":true}, {}]
}],
content_panel: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
tenantLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","lock":true,"showing":false,"verticalAlign":"top"}, {}, {
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
],"dsType":"com.mancodb.data.Tenant","height":"100%","localizationStructure":{}}, {"onCellDblClick":"tenantLivePanel1.popupLivePanelEdit"}, {
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
}],
pageUsuarios: ["wm.PageContainer", {"deferLoad":true,"pageName":"Usuarios"}, {}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","width":"24px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by Cool4Code","height":"100%","padding":"4"}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"MancoLDTA 2014 ","height":"100%","padding":"4","styles":{},"width":"100%"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';