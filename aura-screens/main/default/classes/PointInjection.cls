/**
 * @author Rémi Le Guin
 * @date 03/07/2019
 * @description Controller for the point injection Lightning component.
 */
public with sharing class PointInjection {

    /**
     * @description Fakes a callout and get a confirmation or an error message.
     * @param email The customer's email address.
     * @param reason The reason for the point injection.
     * @param points The number of points to inject or remove.
     * @return A confirmation or an error message.
     */
    @AuraEnabled
    public static String callout(String email, String reason, Integer points) {
        if (points != null && !String.isEmpty(reason) && reason == 'SUPPRESSION_POINTS') {
            return Label.PointRemovalConfirmation;
        } else if (points != null) {
            return Label.PointInjectionConfirmation;
        } else {
            return Label.Error;
        }
    }

}