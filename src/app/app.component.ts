import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent implements OnInit, OnDestroy{
  title = 'typer';

  // Class property to hold the text
  text: string = "mechanics acceleration programming variables electromagnet kinematics optimization structures quantum unsupervised equations encryption simulation inheritance theorems algorithmic technology databases clustering automation statistics construction oscillation framework gravitation probability classification calculus neural network efficiency functions blueprint thermodynamics supervised integration relativity algorithm inheritance variables thermodynamic compiler functions algorithms complexity efficiency architectures systems mathematics modeling optimization inference analysis variables datasets patterns machine learning probabilities integrals engineering acceleration electromagnetics computerization architectures telecommunications robotics optimization simulations approximations databases frameworks implementations methodologies theories heuristics analyses systems designs formulations paradigms applications analytics calculations computations discoveries";




  // Class property to hold the array of words
  arr: string[];

  wordNum:number =0;

  // Class property to hold the random word for rendering
  render: string;
  answer:string ='';
  constructor() {

    this.arr = this.text.split(' '); // Initialize arr with real words from the original text
    this.render = this.getRandomWord(); // Initialize render with a random word
  }

  adjustHeight(element: HTMLTextAreaElement) {
    element.style.height = 'auto'; // Reset height to auto to recalculate
    element.style.height = element.scrollHeight + 'px'; // Set height based on scrollHeight
  }


  // Method to get a random word from the arr array
  getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex]; // Return a random word from the array
  }




  timer: number = 0; // Time in seconds
  timerInterval: any; // Holds the interval ID
  isTimerRunning: boolean = false; // To track if the timer is running

  ngOnInit() {
    // Initialize any setup if needed
  }

  ngOnDestroy() {
    this.stopTimer(); // Clean up the timer when the component is destroyed
  }

  startTimer() {
    if (this.isTimerRunning) return; // Prevent multiple timers
    this.isTimerRunning = true;
    this.timer = 0; // Reset the timer

    this.timerInterval = setInterval(() => {
      if (this.timer < 30) {
        this.timer++; // Increment the timer every second
        this.answerChanger();
      } else {
        this.answer = '';
        this.timer =0;
        this.stopTimer(); // Stop the timer when it reaches 30 seconds
        this.calculate();
        this.showPopup = true;
      }
    }, 1000); // Update every 1000 milliseconds (1 second)
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval); // Stop the timer
      this.isTimerRunning = false;
    }
  }

  answerChanger(){
    if(this.isTimerRunning){
      if(this.answer == this.render){
        this.render = this.getRandomWord();
        this.answer = '';
        this.wordNum++;
      }
    }
  }

  //popup
  showPopup: boolean = false;
  closePopup() {
    this.showPopup = false; // Hide the popup
    this.timer=0;
    this.score =0;
    this.wordNum=0;
    this.answer='';
    this.stopTimer();
  }

  score = 0;
  calculate(){

    this.score = this.wordNum*2;
  }

}



