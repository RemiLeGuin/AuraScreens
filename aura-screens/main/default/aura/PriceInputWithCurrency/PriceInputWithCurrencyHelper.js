({
    setCurrencies: function(component) {
        var action = component.get("c.getAllCurrencyIsoCodes");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var options = [];
                response.getReturnValue().forEach(function(currency) {
                    options.push({ "label": currency, "value": currency });
                });
                component.set("v.currencies", options);
            } else {
                var options = [];
                options.push({ "label": "EUR", "value": "EUR" });
                component.set("v.currencies", options);
            }
        });
        $A.enqueueAction(action);
    },
    
    validatePrice: function(component) {
        var input = document.getElementById("price-input");
        var formElement = document.getElementById("price-form-element");
        var inputError = document.getElementById("price-input-error");
        if(input.value == null || input.value <= 0) {
            component.set("v.priceOk", false);
            $A.util.removeClass(inputError, "slds-hide");
            $A.util.addClass(formElement, "slds-has-error");
        } else {
            component.set("v.priceOk", true);
            $A.util.addClass(inputError, "slds-hide");
            $A.util.removeClass(formElement, "slds-has-error");
        }
    }
})