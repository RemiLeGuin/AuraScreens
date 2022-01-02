/**
 * @author Rémi Le Guin
 * @date 03/07/2019
 * @description Test class for the utility class for the Currency ISO codes used in the org.
 */
@IsTest
private class CurrencyIsoCodesTest {

    @IsTest
    private static void getAllCurrencyIsoCodesTest() {
        List<String> codes = CurrencyIsoCodes.getAllCurrencyIsoCodes();
        System.assertEquals('EUR', codes[0], 'The method did not get the right currency ISO code');
    }

}