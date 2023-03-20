import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  tipo = '';


  
  tutorial: Tutorial = {
    title: '',
    //description: '',
    //published: false
  };
  
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

saveTutorial(): void {
  this.currentTutorial = {};
  this.currentIndex = -1;

    this.tutorialService.newCar(this.tipo) //llamada a metodos del servicio
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  
    }


}