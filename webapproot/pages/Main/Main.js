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
	_end: 0
});