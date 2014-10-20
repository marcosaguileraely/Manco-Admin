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