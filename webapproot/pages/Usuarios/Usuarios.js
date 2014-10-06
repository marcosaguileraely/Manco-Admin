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
	_end: 0
});