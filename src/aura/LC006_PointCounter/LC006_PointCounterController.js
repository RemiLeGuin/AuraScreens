({
    handleReasonChange : function(component, event) {
        var reason = event.getParam("reason");
        var input = document.getElementById('point-input');
        if(reason != null && reason == "SUPPRESSION_POINTS") {
            input.classList.add("background-color_red");
            input.classList.remove("background-color_green");
        } else if (reason != null && reason != "") {
            input.classList.add("background-color_green");
            input.classList.remove("background-color_red");
        } else if (reason != null && reason == "") {
            input.classList.remove("background-color_green");
            input.classList.remove("background-color_red");
        }
    },
    
    handleInput : function(component, event, helper) {
        var inputValue = document.getElementById('point-input').value;
        var formElement = document.getElementById('point-form-element');
        var inputError = document.getElementById('point-input-error');
        component.set("v.points", inputValue);
        $A.util.addClass(inputError, "slds-hide");
        $A.util.removeClass(formElement, "slds-has-error");
        helper.validateInput(component);
    },
    
    handleDecrement : function(component, event, helper) {
        var value = parseInt(document.getElementById('point-input').value, 10);
        value = isNaN(value) ? 0 : value;
        value = value > 0 ? value-1 : 0;
        document.getElementById('point-input').value = value;
        component.set("v.points", value);
        helper.validateInput(component);
    },
    
    handleIncrement : function(component, event, helper) {
        var value = parseInt(document.getElementById('point-input').value, 10);
        value = isNaN(value) ? 0 : value;
        value = value < 1000 ? value+1 : 1000;
        document.getElementById('point-input').value = value;
        component.set("v.points", value);
        helper.validateInput(component);
    },
    
    handleBlur : function(component, event, helper) {
        helper.validateInput(component);
    },
    
    handleFormSubmission : function(component, event, helper) {
        helper.validateInput(component);
    },
    
    handleKeyDown : function(component, event) {
        if (event.which == 13) {
            component.getEvent("formSubmissionFromInput").fire();
        }
    }
})