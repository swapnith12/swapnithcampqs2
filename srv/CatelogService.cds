using { ust.swapnith.kondapalli.db } from '../db/datamodel';

service CatalogService @(path: 'CatalogService') {
 
   entity ProductSet as projection on db.master.product;
 
   entity PoSet@(odata.draft.enabled:true) as projection on db.transaction.purchaseorder;
   
   entity PoItemSet as projection on db.transaction.poitems;
}