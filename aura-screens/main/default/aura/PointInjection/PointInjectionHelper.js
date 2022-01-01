({
    serverCallout : function(component) {
        component.set("v.serverProcess", true);
        var action = component.get("c.callout");
        action.setParams({
            "email": component.get("v.simpleRecord.Email"),
            "reason": component.get("v.reason"),
            "points": component.get("v.points")
        });
        action.setCallback(this, function(response) {            
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.returnMessage", response.getReturnValue());
                var message = component.get("v.returnMessage");
                if (message == null || message.startsWith($A.get("$Label.c.Error"))) {
                    var messageBox = component.find("message-output");
                    $A.util.removeClass(messageBox, "slds-hide");
                } else {
                    $A.get("e.force:closeQuickAction").fire();
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        title: $A.get("$Label.c.Confirmation"),
                        type: "success",
                        message: message,
                        messageTemplate: message,
                        messageTemplateData: [{
                            label: component.get("v.points"),
                        },
                        {
                            label: component.get("v.simpleRecord.Email"),
                        }]
                    });
                    toastEvent.fire();
                }
            }
            component.set("v.serverProcess", false);
        });
        $A.enqueueAction(action);
    }
})