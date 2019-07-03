({
    doInit : function(component) {
        component.set("v.placeholder", $A.get("$Label.c.ChooseOne"));
        var options = [];
        options.push({ "label": $A.get("$Label.c.WelcomeBonus"), "value": "BIENVENUE_POINTS" });
        options.push({ "label": $A.get("$Label.c.CommercialGesture"), "value": "GESTE_COMMERCIAL_POINTS" });
        options.push({ "label": $A.get("$Label.c.PointRegularization"), "value": "REGULARISATION_POINTS" });
        options.push({ "label": $A.get("$Label.c.PointTransfer"), "value": "TRANSFERT_POINTS" });
        options.push({ "label": $A.get("$Label.c.PointRemoval"), "value": "SUPPRESSION_POINTS" });
        component.set("v.options", options);
    },
    
    handleReasonChange : function(component) {
        component.find("form-element").reportValidity();
        var injectionReasonChange = $A.get("e.c:LE001_InjectionReasonChange");
        injectionReasonChange.setParam("reason", component.get("v.reason"));
        injectionReasonChange.fire();
    },
    
    validateInput : function(component) {
        component.find("form-element").reportValidity();
    }
})