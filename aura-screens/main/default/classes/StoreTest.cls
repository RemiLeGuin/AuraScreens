/**
 * @author Rémi Le Guin
 * @date 03/07/2019
 * @description Test class for the utility class for the Store__c custom object.
 */
@IsTest
private class StoreTest {

    @TestSetup
    private static void setup() {
        List<Store__c> stores = new List<Store__c>();
        for (Integer i = 0; i<100; i++) {
            stores.add(new Store__c(Name = 'Store' + String.valueOf(i).leftPad(3, '0')));
        }
        insert stores;
    }

    @IsTest
    private static void getStoreNamesTest() {
        List<String> storeNames = Store.getStoreNames();
        System.assertEquals('Call Center', storeNames[0], 'The method did not get the right store name');
    }

}