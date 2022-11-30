// Jest config
import type { Config } from 'jest';
import 'jest-preset-angular/setup-jest';
const jestConfig: Config = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
};

export default jestConfig;

// Initialize TestBed
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
