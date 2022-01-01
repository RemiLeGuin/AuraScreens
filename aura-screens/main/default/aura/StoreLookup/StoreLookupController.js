({
    onInit : function(component, event, helper) {
        component.handleClick = $A.getCallback(function() {
            if (!component.isValid()) {
                window.removeEventListener("click", component.handleClick);
                return;
            }
            if (document.activeElement !== document.getElementById("pill-close-button")
                && document.activeElement !== document.getElementById("form-input")) {
                helper.closeMenu(component);
                helper.validateInput(component);
            }
        });
        window.addEventListener("click", component.handleClick);
    },
    
    handleFormSubmission : function(component, event, helper) {
        helper.closeMenu(component);
        helper.validateInput(component);
    },
    
    handleRecordUpdate : function(component, event, helper) {
        helper.getStores(component);
    },
    
    handleClickOnPill : function(component, event, helper) {
        helper.showInput(component);
    },
    
    handlePillKeyDown : function(component, event, helper) {
        if (event.which !== 9) {
            helper.showInput(component);
        }
    },
    
    handleInputKeyDown : function(component, event, helper) {
        event.stopPropagation();
        if (event.which == 38) {
            helper.moveFocusUp(component);
        }
        else if (event.which == 40) {
            helper.moveFocusDown(component);
        }
        else if (event.which == 27 && component.get("v.openMenu")) {
            helper.closeMenu(component);
        }
        else if (event.which == 27 && !component.get("v.openMenu")) {
            $A.get("e.force:closeQuickAction").fire();
        }
        else if (event.which == 9) {
            helper.closeMenu(component);
            helper.validateInput(component);
        }
    },
    
    handleInput : function(component, event, helper) {
        component.set("v.store", document.getElementById("form-input").value);
        helper.searchStores(component);
        var suggestions = component.get("v.suggestions");
        if (suggestions.length === 0) {
            component.set("v.noResult", true);
        }
        else {
            component.set("v.noResult", false);
        }
        $A.util.addClass(component.find("dropdown-trigger"), "slds-is-open");
        component.set("v.openMenu", true);
        component.set("v.focusIndex", null);
        component.set("v.focusIndex", 0);
    },
    
    handleInputKeyUp : function(component, event, helper) {
        var stores = component.get("v.stores");
        var store = component.get("v.store");
        var formInput = document.getElementById("form-input").value;
        if (event.which == 13 && component.get("v.openMenu")) {
            helper.setStore(component);
            helper.closeMenu(component);
            component.set("v.focusIndex", event.currentTarget.dataset.index);
            helper.validateInput(component);
            helper.showPill(component);
        }
        else if (event.which == 13 && !component.get("v.openMenu")
                 && stores.includes(store) && formInput === store) {
            component.getEvent("formSubmissionFromInput").fire();
        }
    },
    
    handleFocusIndexChange : function(component) {
        var focusIndex = component.get("v.focusIndex");
        var lookupMenu = component.find("lookup-menu").getElement();
        
        if (!$A.util.isEmpty(lookupMenu)) {
            var options = lookupMenu.getElementsByTagName("li");
            var focusScrollTop = 0;
            var focusScrollBottom = 0;
            
            for (var i = 0; i < options.length; i++) {
                var optionSpan = options[i].getElementsByTagName("span")[0];
                if (i === focusIndex) {
                    $A.util.addClass(optionSpan, "slds-has-focus");
                }
                else {
                    if (i < focusIndex) {
                        focusScrollTop += options[i].scrollHeight;
                    }
                    $A.util.removeClass(optionSpan, "slds-has-focus");
                }
            }
            
            if (focusIndex) {
                focusScrollBottom = focusScrollTop + options[focusIndex].scrollHeight;
            }
            
            if (focusScrollTop < lookupMenu.scrollTop) {
                lookupMenu.scrollTop = focusScrollTop;
            }
            else if (focusScrollBottom > lookupMenu.scrollTop + (lookupMenu.clientHeight - 7)) {
                lookupMenu.scrollTop = focusScrollBottom - (lookupMenu.clientHeight - 7);
            }
        }
    },
    
    handleClickOnItem : function(component, event, helper) {
        component.set("v.focusIndex", event.currentTarget.dataset.index);
        helper.setStore(component);
        helper.closeMenu(component);
        helper.validateInput(component);
        helper.showPill(component);
    }
})