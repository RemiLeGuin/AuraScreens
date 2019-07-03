({
    handleCancel : function() {
        $A.get("e.force:closeQuickAction").fire();
    },
    
    handleTicketNumberChange : function(component) {
        component.find("ticket-number-input").reportValidity();
    },
    
    handleTicketNumberKeyDown : function(component, event, helper) {
        if (event.which == 13) {
            component.find("ticket-number-input").reportValidity();
            helper.submit(component);
        }
    },
    
    handleSubmission : function(component, event, helper) {
        helper.submit(component);
    }
})