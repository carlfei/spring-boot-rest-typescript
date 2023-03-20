import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model'; //importa clase DTO
import { TutorialService } from 'src/app/services/tutorial.service'; //importa el servicio al que llama

@Component({  //inyecta el componente que hace las llamadas
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  id = '';

  constructor(private tutorialService: TutorialService) { } 
/*
la clase TutorialsListComponent instancia objetos de la clase del servicio :
TutorialService  ,,, con la que se comunica


  */

  ngOnInit(): void {
   // this.retrieveTutorials();
  }


  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
    
  }


  listAll(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}