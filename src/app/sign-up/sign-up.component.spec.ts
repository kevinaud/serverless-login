/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

describe('Component: SignUp', () => {
  it('should create an instance', () => {
    let component = new SignUpComponent();
    expect(component).toBeTruthy();
  });
});
