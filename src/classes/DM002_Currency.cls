public with sharing class DM002_Currency {
    
	@AuraEnabled
	public static List<String> getAllCurrenciesIsoCode() {
		List<String> currenciesIsoCode = new List<String> ();
		/*for (CurrencyType cur : [SELECT IsoCode FROM CurrencyType]) {
			currenciesIsoCode.add(cur.IsoCode);
		}*/
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