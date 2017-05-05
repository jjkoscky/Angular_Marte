import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSobreComponent } from './container-sobre.component';

describe('ContainerSobreComponent', () => {
  let component: ContainerSobreComponent;
  let fixture: ComponentFixture<ContainerSobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerSobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
