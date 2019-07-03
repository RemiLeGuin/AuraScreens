({
    handleCancel : function() {
        $A.get("e.force:closeQuickAction").fire();
    },
    
    handleSubmission : function(component, event, helper) {
        $A.get("e.c:LE002_FormSubmission").fire();
        var reason = component.get("v.reason");
        if (component.get("v.storeOk") && reason != null && component.get("v.pointsOk")) {
            helper.serverCallout(component);
        }
    }
})