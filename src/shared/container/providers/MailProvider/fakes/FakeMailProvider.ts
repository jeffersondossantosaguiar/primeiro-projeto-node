import IMailProvider from "../models/IMailProvider"

interface Imessage {
  to: string
  body: string
}

export default class FakeMailProvider implements IMailProvider {
  private messages: Imessage[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({
      to,
      body
    })
  }
}
