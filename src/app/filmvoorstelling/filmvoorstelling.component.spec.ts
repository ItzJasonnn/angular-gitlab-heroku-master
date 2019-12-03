import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FilmvoorstellingComponent } from './filmvoorstelling.component'

describe('FilmvoorstellingComponent', () => {
  let component: FilmvoorstellingComponent
  let fixture: ComponentFixture<FilmvoorstellingComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilmvoorstellingComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmvoorstellingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
