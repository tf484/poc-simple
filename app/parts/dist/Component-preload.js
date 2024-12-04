//@ui5-bundle parts/Component-preload.js
sap.ui.require.preload({
	"parts/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("parts.Component",{metadata:{manifest:"json"}})});
},
	"parts/i18n/i18n.properties":'# This is the resource bundle for parts\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"parts/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"parts","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.14.3","toolsId":"4bc63c81-7de6-4477-a017-2149078e38e3"},"dataSources":{"mainService":{"uri":"odata/v4/parts/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.131.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"parts.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"PartsList","target":"PartsList"},{"pattern":"Parts({key}):?query:","name":"PartsObjectPage","target":"PartsObjectPage"}],"targets":{"PartsList":{"type":"Component","id":"PartsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Parts","variantManagement":"Page","navigation":{"Parts":{"detail":{"route":"PartsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"PartsObjectPage":{"type":"Component","id":"PartsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Parts"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
});
//# sourceMappingURL=Component-preload.js.map
