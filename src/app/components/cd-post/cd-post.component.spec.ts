import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPostComponent } from './cd-post.component';

describe('CdPostComponent', () => {
  let component: CdPostComponent;
  let fixture: ComponentFixture<CdPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdPostComponent]
    });
    fixture = TestBed.createComponent(CdPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
