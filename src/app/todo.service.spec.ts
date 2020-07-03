import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { freeApiService } from './todo.service';

describe('Toto Service Called', () => {
  let service: freeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        
      ],
    }).compileComponents();
    service = TestBed.inject(freeApiService);
  });
 
});
