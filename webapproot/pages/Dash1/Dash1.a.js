dojo.declare("Dash1", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Dash1.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","padding":"5","styles":{},"verticalAlign":"top"}, {}, {
dash_1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
dojoChart1: ["wm.DojoChart", {"height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
};

Dash1.prototype._cssText = '';
Dash1.prototype._htmlText = '';