
define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/controller.html", 
        "myUtil/contentViewer", "myUtil/customForm", "dojo/_base/lang", "dojo/domReady!"],
		function(declare, WidgetBase, TemplatedMixin, template, contentViewer, customForm, lang){
	        return declare([WidgetBase, TemplatedMixin], {
	            templateString: template,
	            
	            postCreate : function myUtil_custom_calendar_postCreate(){
	            	            	
	            	var myContentViewer = contentViewer();
	            	myContentViewer.placeAt(this.myContentViewerAP, "last");
	            	
	            	var myCustomForm = customForm();
	            	myCustomForm.placeAt(this.myCustomFormAP, "last");
	        	}
	        });
	});
