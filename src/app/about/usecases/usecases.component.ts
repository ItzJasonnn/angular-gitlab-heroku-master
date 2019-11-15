import { Component, OnInit } from '@angular/core'
import { UseCase } from '../usecase.model'

@Component({
  selector: 'app-about-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.scss']
})
export class UsecasesComponent implements OnInit {
  readonly PLAIN_USER = 'Reguliere gebruiker'
  readonly ADMIN_USER = 'Administrator'

  useCases: UseCase[] = [
    {
      id: 'UC-01',
      name: 'Inloggen',
      description: 'Hiermee logt een bestaande gebruiker in.',
      scenario: [
        'Gebruiker vult email en password in en klikt op Login knop.',
        'De applicatie valideert de ingevoerde gegevens.',
        'Indien gegevens correct zijn dan redirect de applicatie naar het startscherm.'
      ],
      actor: this.PLAIN_USER,
      precondition: 'Geen',
      postcondition: 'De actor is ingelogd'
    },
    {
      id: 'UC-02',
      name: 'Creëren film',
      description: 'Hiermee kan een administrator een nieuwe film toevoegen',
      scenario: [
        'Klik op create knop',
        'Vul velden in',
        'Klik op bevestig knop',
        'Indien gegevens juist ingevuld, redirect naar films lijst'
      ],
      actor: this.ADMIN_USER,
      precondition: 'De actor is ingelogd met een admin account',
      postcondition: 'Nieuwe film toegevoegd aan lijst'
    },
    {
      id: 'UC-03',
      name: 'Aanpassen film informatie',
      description: 'Hiermee kan een administrator de informatie van een bepaalde film aanpassen',
      scenario: [
        'Je klikt op de film die aangepast moet worden',
        'In het detailscherm wordt er op aanpassen geklikt',
        'Velden die aangepast moeten worden kunnen hier aangepast worden',
        'Indien klaar, op opslaan knop klikken'
      ],
      actor: this.ADMIN_USER,
      precondition: 'Film moet in lijst van films staan',
      postcondition: 'Film informatie is aangepast'
    },
    {
      id: 'UC-04',
      name: 'Film deleten',
      description: 'Hiermee kan een administrator een film verwijderen uit de lijst',
      scenario: [
        'Klik op de film die verwijdert moet worden',
        'In het detailscherm, klik op het verwijderen knopje',
        'Klik op bevestigen',
        'Indien bevestigd, redirect naar scherm met films'
      ],
      actor: this.ADMIN_USER,
      precondition: 'Film moet in lijst aanwezig zijn',
      postcondition: 'Film is uit lijst verwijderd'
    },
    {
      id: 'UC-05',
      name: 'Lijst van films ophalen',
      description: 'Hiermee kan een user de lijst van films ophalen en deze bekijken.',
      scenario: ['Klikt op lijst films', 'Bekijkt lijst films'],
      actor: this.PLAIN_USER,
      precondition: 'Site is online',
      postcondition: 'Lijst met films is opgehaald'
    },
    {
      id: 'UC-06',
      name: 'Informatie bepaalde film ophalen',
      description: 'Hiermee kan een user extra informatie over een film ophalen',
      scenario: [
        'Klikt op lijst films',
        'Zoekt film waar user meer informatie over wil',
        'Klikt op deze film',
        'Bekijkt detailscherm van film'
      ],
      actor: this.PLAIN_USER,
      precondition: 'Site is online',
      postcondition: 'Extra informatie over een bepaalde film op scherm'
    },
    {
      id: 'UC-07',
      name: 'Informatie bepaalde film ophalen',
      description: 'Hiermee kan een user extra informatie over een film ophalen',
      scenario: [
        'Klikt op lijst films',
        'Zoekt film waar user meer informatie over wil',
        'Klikt op deze film',
        'Bekijkt detailscherm van film'
      ],
      actor: this.PLAIN_USER,
      precondition: 'Site is online',
      postcondition: 'Extra informatie over een bepaalde film op scherm'
    }
  ]

  constructor() {}

  ngOnInit() {}
}
