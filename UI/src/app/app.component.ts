import {​ Component, OnInit }​ from '@angular/core';
import {​ DataService }​ from './service/data.service';
@Component({​
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
}​)
export class AppComponent implements OnInit {​
    title = 'WinBQuiz';
    public valArray: string[] = [];
    public isSubmitted = false;
    public imageAvailable = false;
    mockQuestions = [
        {​
            option: 1,
            ques: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            options: ['one', 'two', 'three'],
            image: '../assets/winbLogo.png'
        }​,
        {​
            option: 2,
            ques: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            options: ['one', 'two', 'three'],
            image: null
        }​,
        {​
            option: 3,
            ques: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            options: ['one', 'two', 'three'],
            image: '../assets/winbLogo.png'
        }​,
        {​
            option: 4,
            ques: "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            options: ['one', 'two', 'three'],
            image: null
        }​,
        {​
            option: 5,
            ques: "5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            options: ['one', 'two', 'three'],
            image: '../assets/winbLogo.png'
        }​
    ];
    constructor(private dataService: DataService) {​}​
    ngOnInit() {​
        this.dataService.getData().subscribe(response => {​
            console.log(response);
        }​);
    }​
    submit() {​
        this.isSubmitted = true;
        this.dataService.postData(this.valArray).subscribe((result) => {​
            console.log('saved:', result);
        }​);
    }​
    onSelected(e: Event, questionNumber: number) {​
        this.valArray[questionNumber - 1] = (e.target as HTMLInputElement).value;
    }​

    onInputChange(e: Event, questionNumber: number) {
        this.valArray[questionNumber - 1] = (e.target as HTMLInputElement).value;
    }
}​

