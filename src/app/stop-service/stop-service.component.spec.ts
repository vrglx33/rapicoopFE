import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopServiceComponent } from './stop-service.component';

describe('StopServiceComponent', () => {
  let component: StopServiceComponent;
  let fixture: ComponentFixture<StopServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
