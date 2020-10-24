import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'WinBQuiz';


    mockQuestions = [
        {
            "ques": "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            "options": ["Option1", "Option2", "Option3", "Option4"]
        },
        {
            "ques": "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            "options": ["Option1", "Option2", "Option3", "Option4"]
        },
        {
            "ques": "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in?",
            "options": ["Option1", "Option2", "Option3", "Option4"]
        },
        {
            "ques": "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            "options": ["Option1", "Option2", "Option3", "Option4"]
        },
        {
            "ques": "5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex?",
            "options": ["Option1", "Option2", "Option3", "Option4"]
        }
    ]

    submit() {
        console.log('submitted');
    }

}
