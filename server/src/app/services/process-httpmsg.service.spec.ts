import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

describe('ProcessHttpmsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
  }));

  it('should be created', () => {
    const service: ProcessHTTPMsgService = TestBed.get(ProcessHTTPMsgService);
    expect(service).toBeTruthy();
  });
});
