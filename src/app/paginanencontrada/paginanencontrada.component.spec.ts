import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginanencontradaComponent } from './paginanencontrada.component';

describe('PaginanencontradaComponent', () => {
  let component: PaginanencontradaComponent;
  let fixture: ComponentFixture<PaginanencontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginanencontradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginanencontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
