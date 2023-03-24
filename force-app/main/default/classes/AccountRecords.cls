public with sharing class AccountRecords {
    @AuraEnabled(cacheable=true)
    public static list<Account> allAccount(){
        list<Account> acList=[SELECT id, Name FROM Account];
        return acList;
    }
   
}