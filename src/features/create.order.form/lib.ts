import { ReceiptTypeResponse } from 'entities/queries';

export const getFirstReceiptType = (receiptTypes?: ReceiptTypeResponse[]) => {
  return receiptTypes?.at(0)?.id;
};
