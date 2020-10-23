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

    submit() {
        console.log('submitted');
    }

}
