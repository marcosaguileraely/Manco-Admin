Login.widgets = {
	phonegapCredentialStorage: ["wm.Variable", {"saveInPhonegap":true,"type":"EntryData"}, {}],
	loginVariable1: ["wm.LoginVariable", {}, {"onError":"loginFailed","onResult":"loadingDialog.hide","onSuccess":"onLoginSuccess"}, {
		input: ["wm.ServiceInput", {"type":"loginInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameInput.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"passwordInput.dataValue","targetProperty":"password"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"hashInput.dataValue","targetProperty":"hash"}, {}]
			}]
		}]
	}],
	loadingDialog: ["wm.LoadingDialog", {"_classes":{"domNode":["rounded"]},"caption":"Logging in","captionWidth":"100px"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"loginInputPanel","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	layoutBox: ["wm.Layout", {}, {}, {
		loginMainPanel: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"bottom","width":"100%"}, {}, {
			loginInputPanel: ["wm.HeaderContentPanel", {"_classes":{"domNode":["rounded"]},"desktopHeight":"222px","deviceType":null,"enableTouchHeight":true,"fitToContentHeight":true,"height":"261px","horizontalAlign":"center","margin":"10","mobileHeight":"290px","padding":"10","styles":{"color":"","backgroundColor":"#ffffff"},"verticalAlign":"top","width":"390px"}, {"onEnterKeyPress":"loginButton.click"}, {
				logo_top_panel: ["wm.Panel", {"height":"101px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"bottom","width":"100%"}, {}, {
					picture_logo: ["wm.Picture", {"aspect":"v","height":"66px","source":"http://www.mancoltda.com.co/images/sampledata/icetheme/logo.png","styles":{},"width":"100%"}, {}]
				}],
				panel1: ["wm.Panel", {"fitToContentHeight":true,"height":"70px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					usernameInput: ["wm.Text", {"caption":"Usuario","captionAlign":"right","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","placeHolder":"fooBar","styles":{},"width":"100%"}, {}],
					passwordInput: ["wm.Text", {"caption":"Clave","captionAlign":"right","captionSize":"120px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","mobileHeight":"45px","password":true,"placeHolder":"******","styles":{},"width":"100%"}, {}],
					hashInput: ["wm.Text", {"dataValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"mancoadmin\",\"deviceType\":\"desktop\"}}","displayValue":"#{\"studio\":{\"pageName\":\"Main\",\"projectName\":\"mancoadmin\",\"deviceType\":\"desktop\"}}","height":"30px","showing":false}, {}]
				}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","styles":{},"width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","caption":" ","height":"100%","padding":"4","singleLine":false,"styles":{},"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"border":"1","borderColor":"#000000","caption":"Acceder","height":"100%","margin":"4","width":"90px"}, {"onclick":"loginButtonClick","onclick2":"loadingDialog.show","onclick3":"loginVariable1"}]
				}]
			}],
			panel2: ["wm.Panel", {"height":"70%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}]
		}],
		label1: ["wm.Label", {"align":"center","caption":"Manco Tracking Tool","padding":"4","styles":{"fontSize":"10px"}}, {}]
	}]
}