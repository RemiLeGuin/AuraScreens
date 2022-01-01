public with sharing class CurrencyIsoCodes {

    @AuraEnabled
    public static List<String> getAllCurrenciesIsoCode() {
        List<String> currenciesIsoCode = new List<String>();
        currenciesIsoCode.add('EUR');
        currenciesIsoCode.add('BGN');
        currenciesIsoCode.add('CZK');
        currenciesIsoCode.add('DKK');
        currenciesIsoCode.add('GBP');
        currenciesIsoCode.add('HRK');
        currenciesIsoCode.add('HUF');
        currenciesIsoCode.add('PLN');
        currenciesIsoCode.add('RON');
        currenciesIsoCode.add('SEK');
        return currenciesIsoCode;
    }

}