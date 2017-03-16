// dojo.provide allows pages to use all of the types declared in this resource.

define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/customForm.html", 
        "dojo/i18n!myUtil/nls/formContent", "dojo/dom-construct", 
        "dojo/dom", "dijit/form/ValidationTextBox","dojox/validate", "dojo/html", "dijit/form/Button", "dojo/_base/lang",
        "dojo/domReady!"],
		function(declare, WidgetBase, TemplatedMixin, template, i18n, domConstruct,
				dom, ValidationTextBox, validate, html, Button, lang){
	        return declare([WidgetBase, TemplatedMixin], {
	            templateString: template,
	      
	            
	            postCreate : function myUtil_custom_calendar_postCreate(){
	        		new ValidationTextBox ({
	                    placeHolder: i18n.placeHolder,
	                    required : true,
	                    regExp: "[a-zA-Z]+"
	                }, this.fName);
	        		
	            	new ValidationTextBox ({
	                    placeHolder: i18n.placeHolder,
	                    required : true,
	                    invalidMessage: i18n.invalidMessageName,
	                    missingMessage: i18n.missingMessageName,
	                    regExp: "[a-zA-Z]+"
	                }, this.lName);
	            	
	            	new ValidationTextBox ({
	            		placeHolder: i18n.placeHolder,
	                    required : true,
	                    invalidMessage: i18n.invalidMessageTelephone,
	                    missingMessage: i18n.missingMessageTelephone,
	                    validator: function (value){
	                    	return validate.isNumberFormat(value, {
	                    		format: ["##########", "###-###-####"]
	                    	});
	                    }
	                }, this.tn);
	            	
	            	this.fNameLabel.innerHTML = i18n.fname;
	            	this.lNameLabel.innerHTML = i18n.lname;
	            	this.tnLabel.innerHTML = i18n.telephone;

	            	
	            	new Button({
	                    label: i18n.submitButtonLabel,
	                    onClick: lang.hitch (this, function(){
	                        // Do something:
	                    	this.formContent.hidden=true;
	                    	this.submitFormSuccessMessageAP.innerHTML=i18n.submitSuccessMessage;
	                    })
	                }, this.submitButtonAP);
	            }
	        });
	});
