import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomVinoComponent } from './zoom-vino.component';

describe('ZoomVinoComponent', () => {
  let component: ZoomVinoComponent;
  let fixture: ComponentFixture<ZoomVinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomVinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
