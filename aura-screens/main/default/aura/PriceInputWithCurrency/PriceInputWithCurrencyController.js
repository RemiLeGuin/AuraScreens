({
    doInit : function(component, event, helper) {
        helper.setCurrencies(component);
    },
    
    handleChange : function(component, event, helper) {
        var priceValue = document.getElementById("price-input").value;
        component.set("v.price", priceValue);
        helper.validatePrice(component);
    },
    
    handleBlur : function(component, event, helper) {
        helper.validatePrice(component);
    },
    
    handleKeyDown : function(component, event) {
        if (event.which == 13) {
            component.getEvent("formSubmissionFromInput").fire();
        }
    },
    
    handleFormSubmission : function(component, event, helper) {
        helper.validatePrice(component);
    }
})