/**
 * @author Rémi Le Guin
 * @date 03/07/2019
 * @description Utility class for the Currency ISO codes used in the org.
 */
public with sharing class CurrencyIsoCodes {

    /**
     * @description Get all the currency ISO codes in the org.
     * @return All the currency ISO codes in the org.
     */
    @AuraEnabled(cacheable=true)
    public static List<String> getAllCurrencyIsoCodes() {
        List<String> currencyIsoCodes = new List<String>();
        /*for (CurrencyType cur : [SELECT IsoCode FROM CurrencyType]) {
			currencyIsoCodes.add(cur.IsoCode);
		}*/
        currencyIsoCodes.add('EUR');
        currencyIsoCodes.add('BGN');
        currencyIsoCodes.add('CZK');
        currencyIsoCodes.add('DKK');
        currencyIsoCodes.add('GBP');
        currencyIsoCodes.add('HRK');
        currencyIsoCodes.add('HUF');
        currencyIsoCodes.add('PLN');
        currencyIsoCodes.add('RON');
        currencyIsoCodes.add('SEK');
        return currencyIsoCodes;
    }

}