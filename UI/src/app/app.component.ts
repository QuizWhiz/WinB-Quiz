import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'WinBQuiz';

    mockQuestions = [
        {
            "ques": "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            "options": ["one", "two", "three", "four"]
        },
        {
            "ques": "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            "options": ["one", "two", "three", "four"]
        },
        {
            "ques": "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            "options": ["one", "two", "three", "four"]
        },
        {
            "ques": "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            "options": ["one", "two", "three", "four"]
        },
        {
            "ques": "5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            "options": ["one", "two", "three", "four"]
        }
    ]
    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getData().subscribe(response => {
            console.log(response);
        });
    }

    submit() {
        console.log('submitted');
    }

}
