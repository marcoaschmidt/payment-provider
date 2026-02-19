import { IOClients } from '@vtex/api'
import { masterDataFor } from '@vtex/clients'
import { MasterDataEntity } from '@vtex/clients/build/clients/masterData/MasterDataEntity'

import External from './External'

export type IPaymentIdsRepository = MasterDataEntity<PaymentIds>

export interface PaymentIds {
  id: string
  paymentId: string
  status: string
}

export class Clients extends IOClients {
  public get external() {
    return this.getOrSet('external', External)
  }

  public get paymentIdRepository() {
    return this.getOrSet(
      'paymentIdRepository',
      masterDataFor<PaymentIds>('paymentid')
    )
  }
}
