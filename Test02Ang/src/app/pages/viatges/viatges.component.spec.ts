import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViatgesComponent } from './viatges.component';

describe('ViatgesComponent', () => {
  let component: ViatgesComponent;
  let fixture: ComponentFixture<ViatgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViatgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViatgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
