public with sharing class LCC001_PointInjection {

    @AuraEnabled
	public static String callout(String email, String reason, Integer points) {
        if (points != null && !String.isEmpty(reason) && reason == 'SUPPRESSION_POINTS') {
			return Label.PointRemovalConfirmation;
		}
        else if (points != null) {
			return Label.PointInjectionConfirmation;
		}
        else {
			return Label.Error;
		}
    }

}