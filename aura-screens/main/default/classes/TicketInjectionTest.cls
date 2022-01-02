/**
 * @author Rémi Le Guin
 * @date 03/07/2019
 * @description Test class for controller for the ticket injection Lightning component.
 */
@IsTest
private class TicketInjectionTest {

    @IsTest
    private static void calloutTestConfirmation() {
        String message = TicketInjection.callout('test@email.com', '123');
        System.assertEquals('Ticket {0} injected on contact {1}', message, 'A wrong message displays');
    }

    @IsTest
    private static void calloutTestError() {
        String message = TicketInjection.callout('test@email.com', null);
        System.assertEquals('Error', message, 'No error message displays');
    }

}