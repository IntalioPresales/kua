import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
declare var $: any;
declare var orgchart: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: fuseAnimations
})
export class DashboardComponent implements OnInit {

    // @ViewChild("d", { static: false }) d: ElementRef;


    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {

        setTimeout(() => {

            $(document).ready(() => {

                $(function () {
                    var ds = {
                        'name': 'Lao Lao',
                        'title': 'general manager',
                        'children': [
                            { 'name': 'Bo Miao', 'title': 'department manager' },
                            {
                                'name': 'Su Miao', 'title': 'department manager',
                                'children': [
                                    { 'name': 'Tie Hua', 'title': 'senior engineer' },
                                    {
                                        'name': 'Hei Hei', 'title': 'senior engineer',
                                        'children': [
                                            { 'name': 'Pang Pang', 'title': 'engineer' },
                                            { 'name': 'Xiang Xiang', 'title': 'UE engineer' }
                                        ]
                                    }
                                ]
                            },
                            { 'name': 'Hong Miao', 'title': 'department manager' },
                            { 'name': 'Chun Miao', 'title': 'department manager' }
                        ]
                    };

                    var oc = $('#chart-container').orgchart({
                        'data': ds,
                        'nodeContent': 'title',
                        'draggable': true,
                        "parentNodeSymbol": false,
                        'pan': true,
                        'zoom': true
                    });

                    oc.$chart.on('nodedrop.orgchart', function (event, extraParams) {
                        console.log('draggedNode:' + extraParams.draggedNode.children('.title').text()
                            + ', dragZone:' + extraParams.dragZone.children('.title').text()
                            + ', dropZone:' + extraParams.dropZone.children('.title').text()
                        );
                        if (!window.confirm('Are you sure to adjust the position of ' + extraParams.draggedNode.children('.title').text())) {
                            event.preventDefault();
                        }
                    });

                });
            })
        }, 3000);


    }

}
