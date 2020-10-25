import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'WinBQuiz';

    public valArray: string[] = [];
    public isSubmitted = false;

    mockQuestions = [
        {
            option: 'option1',
            ques: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            options: ['one', 'two', 'three']
        },
        {
            option: 'option2',
            ques: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            options: ['one', 'two', 'three']
        },
        {
            option: 'option3',
            ques: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            options: ['one', 'two', 'three']
        }
    ];

    submit() {
        this.isSubmitted = true;
        console.log(this.valArray);
    }

    onSelectionChange() {
        this.valArray.push();
    }

}
