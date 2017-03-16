// dojo.provide allows pages to use all of the types declared in this resource.

define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./templates/contentViewer.html", 
        "dojo/i18n!myUtil/nls/formContent", "dojo/_base/Deferred", "dojo/_base/xhr", "dojo/dom-construct", 
        "dojo/dom", "dojo/html", "dijit/form/Button", "dojo/_base/lang", "dojo/date/locale",
        "dojo/domReady!"],
		function(declare, WidgetBase, TemplatedMixin, template, i18n, Deferred, xhr, domConstruct,
				dom, html, Button, lang, loc){
	        return declare([WidgetBase, TemplatedMixin], {
	            templateString: template,
	      
	            
	            postCreate : function myUtil_contentViewer_postCreate(){

	            	var d = new Date(2013,3,1);
	            	this.openingMessageAP.innerHTML = i18n.openingMessage + loc.format(d);
	            	
	            	new Button({
	                    label: i18n.page1Button,
	                    onClick: lang.hitch (this, function(){
	                    	this.loadPage(this.bodyContent,i18n.page1);
	                    })
	                }, this.page1ButtonAP);
	            	
	            	new Button({
	                    label: i18n.page2Button,
	                    onClick: lang.hitch (this, function(){
	                    	this.loadPage(this.bodyContent,i18n.page2);
	                    })
	                }, this.page2ButtonAP);
	            	
	            	new Button({
	                    label: i18n.page3Button,
	                    onClick: lang.hitch (this, function(){
	                    	this.loadPage(this.bodyContent,i18n.page3);
	                    })
	                }, this.page3ButtonAP);
	            	
	            	//this.createForm();
	            	this.loadPage(this.bodyContent,i18n.page1);
	                // Create a deferred and get the user list
	        	},
	        	loadPage : function myUtil_contentViewer_loadPage(attachPoint,url){
	        		//Summary: 
	        		// Change the view of the calendar(s) to display the following month(s)
	        		//
	        		//Description:
	        		// In this method, we check the value of current month for every calendar and advance it by 1
	        		//
	        		//Return: 
	        		// Nothing	

	            	var def = new Deferred();
	                var bodyContent = attachPoint;
	                // Set up the callback and errback for the deferred
	                def.then(function(res){
	        			html.set(bodyContent, res);//,{parseContent: true});
	                },function(err){
	                    domConstruct.create("li", {
	                        innerHTML: "Error: " + err
	                    }, bodyContent);
	                });
	                 
	                // Send an xhr request
	                xhr.get({
	                    url: url,
	                    handleAs: "text",
	                    load: function(res){
	                        // Resolve when content is received
	                        def.resolve(res);
	                    },
	                    error: function(err){
	                        // Reject on error
	                        def.reject(err);
	                    }
	                });

	        	}
	        });
	});
