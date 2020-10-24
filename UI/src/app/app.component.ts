import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'WinBQuiz';

    public valArray: string[] = [];

    mockQuestions = [
        {
            ques: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            one: 'one',
            two: 'two',
            three: 'three'
        },
        {
            ques: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            one: 'one',
            two: 'two',
            three: 'three'
        },
        {
            ques: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia ornare ex, maximus porta enim scelerisque in. Cras sit amet turpis ut est molestie maximus.?",
            one: 'one',
            two: 'two',
            three: 'three'
        }
    ];

    submit() {
        console.log('submitted');
    }

    onSelectionChange(entry: string) {
        const val = entry;
        this.valArray.push(entry);
    }

}
