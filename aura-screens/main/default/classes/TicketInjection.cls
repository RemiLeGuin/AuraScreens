/**
 * @author Rémi Le Guin
 * @date 03/07/2019
 * @description Controller for the ticket injection Lightning component.
 */
public with sharing class TicketInjection {

    /**
     * @description Fakes a callout and get a confirmation or an error message.
     * @param email The customer's email address.
     * @param reason The number of the ticket to inject.
     * @return A confirmation or an error message.
     */
    @AuraEnabled
    public static String callout(String email, String ticketNumber) {
        if (!String.isEmpty(ticketNumber)) {
            return Label.TicketInjectionConfirmation;
        } else {
            return Label.Error;
        }
    }

}