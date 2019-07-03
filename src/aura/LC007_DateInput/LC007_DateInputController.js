({
    doInit : function(component, event, helper) {
        var today = $A.localizationService.formatDate(new Date(), "YYYY-MM-DD");
        component.set("v.today", today);
        helper.setPlaceholder(component);
    },
    
    handleBlur : function(component) {
        if (component.find("date-input").checkValidity()) {
            component.set("v.ticketDateOk", true);
        }
        else {
            component.set("v.ticketDateOk", false);
        }
    },
    
    handleFormSubmission : function(component) {
        var dateInput = component.find("date-input");
        dateInput.reportValidity();
        if (dateInput.checkValidity()) {
            component.set("v.ticketDateOk", true);
        }
        else {
            component.set("v.ticketDateOk", false);
        }
    },
    
    handleKeyDown : function(component, event) {
        if (event.which == 13) {
            component.getEvent("formSubmissionFromInput").fire();
        }
    }
})