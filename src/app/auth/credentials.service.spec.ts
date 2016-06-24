/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CredentialsService } from './credentials.service';

describe('Credentials Service', () => {
  beforeEachProviders(() => [CredentialsService]);

  it('should ...',
      inject([CredentialsService], (service: CredentialsService) => {
    expect(service).toBeTruthy();
  }));
});
