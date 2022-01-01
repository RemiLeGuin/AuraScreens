# AuraScreens

This repository contains the code for two modals to be used as quick actions in Salesforce:

-   Point Injection: allows to inject points on a loyalty card for the contact/customer which belongs to a store.

![Point Injection](/images/InjectPoints.png)

-   Ticket Injection: allows to inject a sale ticket for the contact/customer in a given store.

![Ticket Injection](/images/InjectTicket.png)

Both screens respect standards practices of the Aura framework for Lightning Components (responsive design, composed of several modules...). Both screens can be fulfilled whith the keyboard and no clicks (even the lookup for the stores). They are documented in the instance's library:

![Documentation](/images/Documentation.png)

## Installation:

-   [Follow this link for Sandboxes](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t1n000002aE7yAAE "https://test.salesforce.com/packaging/installPackage.apexp?p0=04t1n000002aE7yAAE")
-   [Follow this link for Production environments, Developer Editions and Trailhead Playgrounds](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1n000002aE7yAAE "https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1n000002aE7yAAE")

## Dataset insertion:

To insert a dataset of store to search for in the screens, execute the following command:

```
sfdx force:data:tree:import --sobjecttreefiles dataset/Store__c.json --targetusername <your org's alias or username>
```