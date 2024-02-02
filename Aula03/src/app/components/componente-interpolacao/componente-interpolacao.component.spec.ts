import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInterpolacaoComponent } from './componente-interpolacao.component';

describe('ComponenteInterpolacaoComponent', () => {
  let component: ComponenteInterpolacaoComponent;
  let fixture: ComponentFixture<ComponenteInterpolacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteInterpolacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteInterpolacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
