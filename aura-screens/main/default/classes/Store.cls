/**
 * @author Rémi Le Guin
 * @date 03/07/2019
 * @description Utility class for the Store__c custom object.
 */
public with sharing class Store {

    /**
     * @description Get all the store names.
     * @return All the store names, ordered.
     */
    @AuraEnabled(cacheable=true)
    public static List<String> getStoreNames() {
        List<Store__c> stores = [SELECT Name FROM Store__c ORDER BY Name];
        List<String> storeNames = new List<String>{ 'Call Center' };
        for (Store__c store : stores) {
            storeNames.add(store.Name);
        }
        return storeNames;
    }

}