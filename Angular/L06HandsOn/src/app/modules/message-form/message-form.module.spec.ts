import { MessageFormModule } from './message-form.module';

describe('MessageFormModule', () => {
  let messageFormModule: MessageFormModule;

  beforeEach(() => {
    messageFormModule = new MessageFormModule();
  });

  it('should create an instance', () => {
    expect(messageFormModule).toBeTruthy();
  });
});
