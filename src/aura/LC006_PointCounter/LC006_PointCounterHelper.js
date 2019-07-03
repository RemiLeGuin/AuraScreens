({
    validateInput : function(component) {
        var input = document.getElementById("point-input");
        var formElement = document.getElementById("point-form-element");
        var inputError = document.getElementById("point-input-error");
        if (input.value == null || input.value-Math.floor(input.value) !== 0
            || input.value < 1 || input.value > 1000) {
            $A.util.removeClass(inputError, "slds-hide");
            $A.util.addClass(formElement, "slds-has-error");
            component.set("v.pointsOk", false);
        } else {
            $A.util.addClass(inputError, "slds-hide");
            $A.util.removeClass(formElement, "slds-has-error");
            component.set("v.pointsOk", true);
        }
    }
})