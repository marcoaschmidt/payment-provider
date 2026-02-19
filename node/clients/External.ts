/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export default class External extends ExternalClient {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(context: IOContext, options?: InstanceOptions) {
    super(``, context, options)
  }

  public async sendPost(url: string, body: Record<string, any>): Promise<any> {
    return this.http.post(`${url}`, body)
  }
}
