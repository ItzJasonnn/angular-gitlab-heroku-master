import { Component, OnInit } from '@angular/core'
import { Film } from './film.model'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  selectedFilm: Film

  constructor() {}

  ngOnInit() {}
}
