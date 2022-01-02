/**
 * @author Rémi Le Guin
 * @date 03/07/2019
 * @description Test class for controller for the point injection Lightning component.
 */
@IsTest
private class PointInjectionTest {

    @IsTest
    private static void calloutTestPointRemoval() {
        String message = PointInjection.callout('test@email.com', 'SUPPRESSION_POINTS', 3);
        System.assertEquals('{0} points removed on contact {1}', message, 'A wrong message displays');
    }

    @IsTest
    private static void calloutTestPointAddition() {
        String message = PointInjection.callout('test@email.com', 'BIENVENUE_POINTS', 2);
        System.assertEquals('{0} points injected on contact {1}', message, 'A wrong message displays');
    }

    @IsTest
    private static void calloutTestError() {
        String message = PointInjection.callout('test@email.com', null, null);
        System.assertEquals('Error', message, 'No error message displays');
    }

}