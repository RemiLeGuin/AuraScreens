public with sharing class Store {

    @AuraEnabled
    public static List<String> getStoreNames() {
        List<Store__c> stores = [SELECT Name FROM Store__c ORDER BY Name];
        List<String> storeNames = new List<String>{ 'Call Center' };
        for (Store__c store : stores) {
            storeNames.add(store.Name);
        }
        return storeNames;
    }

}