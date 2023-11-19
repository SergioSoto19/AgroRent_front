import { TestBed } from '@angular/core/testing';

import { InfoUserSessionService } from './info-user-session.service';

describe('InfoUserSessionService', () => {
  let service: InfoUserSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoUserSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
