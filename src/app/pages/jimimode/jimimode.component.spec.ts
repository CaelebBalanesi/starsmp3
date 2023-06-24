import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JimimodeComponent } from './jimimode.component';

describe('JimimodeComponent', () => {
  let component: JimimodeComponent;
  let fixture: ComponentFixture<JimimodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JimimodeComponent]
    });
    fixture = TestBed.createComponent(JimimodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
