({
    closeMenu : function(component) {
        $A.util.removeClass(component.find("dropdown-trigger"), "slds-is-open");
        component.set("v.openMenu", false);
        component.set("v.focusIndex", null);
    },

    showInput : function(component) {
        component.set("v.store", "");
        component.set("v.searching", true);
        setTimeout(function() {
            document.getElementById("form-input").focus();
        }, 200);
    },
    
    showPill : function(component) {
        component.set("v.searching", false);
        document.getElementById("pill-close-button").focus();
    },
    
    validateInput : function(component) {
        var stores = component.get("v.stores");
        var store = component.get("v.store");
        var formElement = component.find("form-element");
        var formError = component.find("form-error");
        if (stores.includes(store)) {
            component.set("v.storeOk", true)
            $A.util.addClass(formError, "slds-hide");
            $A.util.removeClass(formElement, "slds-has-error");
        }
        else {
            component.set("v.storeOk", false)
            $A.util.removeClass(formError, "slds-hide");
            $A.util.addClass(formElement, "slds-has-error");
        }
    },
    
    getStores : function(component) {
        var action = component.get("c.getStoreNames");
        action.setCallback(this, function(response) {            
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.stores", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    
    searchStores : function(component) {
        var stores = component.get("v.stores");
        var input = document.getElementById("form-input");
        var suggestions = new Array();
        for (var i = 0; i < stores.length; i++) {
            if (stores[i].toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
                suggestions.push(stores[i]);
            }
        }
        component.set("v.suggestions", suggestions);
    },
    
    moveFocusUp : function(component) {
        var openMenu = component.get("v.openMenu");
        var focusIndex = component.get("v.focusIndex");
        var options = component.find("lookup-list").getElement().getElementsByTagName("li");
        if (openMenu && (focusIndex === null || focusIndex === 0)) {
            focusIndex = options.length - 2;
        }
        else {
            --focusIndex;
        }
        component.set("v.focusIndex", focusIndex);
    },
    
    moveFocusDown : function(component) {
        var openMenu = component.get("v.openMenu");
        var focusIndex = component.get("v.focusIndex");
        var options = component.find("lookup-list").getElement().getElementsByTagName("li");
        if (openMenu && (focusIndex === null || focusIndex === options.length - 2)) {
            focusIndex = 0;
        }
        else {
            ++focusIndex;
        }
        component.set("v.focusIndex", focusIndex);
    },
    
    setStore : function(component) {
        var focusIndex = component.get("v.focusIndex");
        var suggestions = component.get("v.suggestions");
        for (var i = 0; i < suggestions.length; i++) {
            if (i == focusIndex) {
                component.set("v.store", suggestions[i]);
            }
        }
    }
})