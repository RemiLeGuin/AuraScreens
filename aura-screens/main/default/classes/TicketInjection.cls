public with sharing class TicketInjection {

    @AuraEnabled
    public static String callout(String email, String ticketNumber) {
        if (!String.isEmpty(ticketNumber)) {
            return Label.TicketInjectionConfirmation;
        } else {
            return Label.Error;
        }
    }

}