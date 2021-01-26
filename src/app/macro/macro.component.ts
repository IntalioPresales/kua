import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare var flowchart: any;


@Component({
    selector: 'app-macro',
    templateUrl: './macro.component.html',
    styleUrls: ['./macro.component.scss']
})
export class MacroComponent implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {

        setTimeout(() => {

            $(document).ready(() => {
                var this_ = this

                var btn = document.getElementById("run")

                $(btn).click(() => {

                    if (chart) {
                        chart.clean();
                    }
                    var cd = document.getElementById("code"),
                        chart;

                    var code = cd['value'];
                    console.log(code, cd)



                    chart = flowchart.parse(code);
                    chart.drawSVG('canvas', 
                    {
                        // 'x': 30,
                        // 'y': 50,
                        'line-width': 7,
                        'maxWidth': 150,//ensures the flowcharts fits within a certian width
                        'line-length': 10,
                        'text-padding': 20,
                        'font-size': 14,
                        'font': 'normal',
                        'font-family': 'Helvetica',
                        'font-weight': 'normal',
                        'font-color': 'black',
                        'line-color': 'black',
                        'element-color': 'black',
                        'fill': '#CCCCCC',
                        'yes-text': 'yes',
                        'no-text': 'no',
                        'arrow-end': 'block',
                        'scale': 1,
                        'symbols': {
                            'start': {
                                'font-color': 'red',
                                'element-color': 'green',
                                'fill': 'yellow'
                            },
                            'operation': {
                                'line-width': 1,
                                "fill": "#ffd581"
                            },
                            'end': {
                                'class': 'end-element'
                            }
                        },
                        'flowstate': {
                            'yellow': { 'fill': '#ffd581' },
                            'current': { 'fill': 'yellow', 'font-color': 'red', 'font-weight': 'bold' },
                            'future': { 'fill': '#FFFF99' },
                            'request': { 'fill': 'blue' },
                            'invalid': { 'fill': '#444444' },
                            'approved': { 'fill': '#58C4A3', 'font-size': 12, 'yes-text': 'APPROVED', 'no-text': 'n/a' },
                            'rejected': { 'fill': '#C45879', 'font-size': 12, 'yes-text': 'n/a', 'no-text': 'REJECTED' }
                        }
                    }
                    );
                })

                $(btn).click()

                $('[id^=sub1]').click(function () {
                    alert('info here');
                });


                function myFunction(event, node) {
                    console.log("You just clicked this node:", node);
                }

            })
        }, 3000);
    }

}
