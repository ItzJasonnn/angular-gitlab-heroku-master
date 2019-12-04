import { Film } from '../films/film.model'
import { Zaal } from '../zaal/zaal.model'

export class Filmvoorstelling {
  public name: string
  public id: number
  public date: Date
  public film: Film
  public zaal: Zaal
}
