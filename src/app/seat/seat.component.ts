import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-seat',
    templateUrl: './seat.component.html',
    styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

    constructor(
        private router: Router
    ) {

    }

    ngOnInit() {
    }


    ngAfterViewInit(): void {

        setTimeout(() => {

            $(document).ready(() => {
                var this_ = this

                $(function () {
                    var ds = {
                        'name': 'Visionary',
                        'title': 'John Smith',
                        'notes': ["culture", "Big Relationships"],
                        'children': [
                            {
                                'name': 'Integrator',
                                'title': 'Sarah Boston',
                                'notes': ["Remove obstacles", "Day to day operations"],
                                'children': [
                                    {
                                        'name': 'Sales/Mktg',
                                        'title': 'Sarah Danish',
                                        'notes': ["Client Relationships", "Growth opp."],
                                        'children': [
                                            { 'name': 'UAE', 'title': '', 'notes': ["Country Target", "Client Relationships"], },
                                            { 'name': 'France', 'title': '', 'notes': ["Country Target", "Client Relationships"], },
                                            { 'name': 'Qatar', 'title': '', 'notes': ["Country Target", "Client Relationships"], },
                                        ]
                                    },
                                    {
                                        'name': 'Operations/Delivery',
                                        'title': 'Mazen Farah',
                                        'notes': ["Programming", "Project management"],
                                        'children': [
                                            { 'name': 'Project Management', 'title': '' },
                                            { 'name': 'Programming', 'title': '' },
                                        ]
                                    },
                                    { 'name': 'Finance', 'title': 'Jad Fisher', 'notes': ["Accounting/Legal", "HR/Admin/IT"], },

                                ]
                            },
                        ]
                    };

                    var nodeTemplate = function (data) {
                        return `
                        <div class="title">${data.name}</div>
                        <div class="content e-title">${data.title}</div>
                        `;
                    };


                    var oc = $('#chart-container').orgchart({
                        'data': ds,
                        'nodeTemplate': nodeTemplate,
                        'nodeContent': 'title',
                        'draggable': true,
                        "parentNodeSymbol": false,
                        'pan': true,
                        'zoom': true,
                        'createNode': function ($node, data) {
                            // console.log($node, data)

                            if (data.notes && data.notes.length) {
                                var secondMenu = "";
                                data.notes.forEach(element => {
                                    secondMenu += `<div class="note">${element}</div>`
                                });
                                $node.append(secondMenu)

                            }


                            // var secondMenuIcon = $('<i>', {
                            //     'class': 'oci oci-info-circle second-menu-icon',
                            //     click: function () {
                            //         $(this).siblings('.second-menu').toggle();
                            //     }
                            // });
                            // var secondMenu = '<div class="second-menu"><img class="avatar" src="img/avatar/' + data.id + '.jpg"></div>';
                        }
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

                    $('.e-title').click(() => {
                        this_.router.navigate(['/seat/person_analyzer']);
                    })

                });
            })
        }, 3000);
    }
}
