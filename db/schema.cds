
using {
  cuid,
  managed
} from '@sap/cds/common';

type PartNumber : Decimal;
annotate PartNumber with @(title : 'Part Number');

type Description : String(60);
annotate Description with @(title : 'Description');

entity Parts : cuid, managed {
    partNumber: PartNumber;
    description: localized Description;
    totalAmount : Decimal;
}

