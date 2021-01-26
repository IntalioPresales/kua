import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Drivers',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            // {
            //     id       : 'dashboard',
            //     title    : 'Dashboard',
            //     translate: 'NAV.SAMPLE.TITLE',
            //     type     : 'item',
            //     icon     : 'dashboard',
            //     url      : '/dashboard',
            // },
            {
                id       : 'UA',
                title    : 'Unique ability',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'assignment',
                url      : '/unique_ability',
                badge    : {
                    title    : '75%',
                    translate: '',
                    bg       : '#039be5',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Seats',
                title    : 'Seats',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'bubble_chart',
                url      : '/seat',
                badge    : {
                    title    : '95%',
                    translate: '',
                    bg       : '#039be5',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Focus',
                title    : 'Focus',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'donut_large',
                url      : '/focus',
                badge    : {
                    title    : '60%',
                    translate: '',
                    bg       : '#039be5',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Meeting',
                title    : 'Meet',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'event_seat',
                url      : '/meetings',
                badge    : {
                    title    : '72%',
                    translate: '',
                    bg       : '#039be5',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Numbers',
                title    : 'Numbers',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'table_chart',
                url      : '/numbers',
                badge    : {
                    title    : '96%',
                    translate: '',
                    bg       : '#039be5',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'Story',
                title    : 'Story',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'data_usage',
                url      : '/story',
                badge    : {
                    title    : '45%',
                    translate: '',
                    bg       : '#039be5',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'MO',
                title    : 'M.O.',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/mo',
                badge    : {
                    title    : '90%',
                    translate: '',
                    bg       : '#039be5',
                    fg       : '#FFFFFF'
                }
            },
            // {
            //     id       : 'Operations',
            //     title    : 'Operations',
            //     translate: 'Operations',
            //     type     : 'collapsable',
            //     icon     : 'dashboard',
            //     children : [
            //         {
            //             id   : 'Macro',
            //             title: 'Macro map',
            //             type : 'item',
            //             url  : '/macro_map'
            //         },
            //         {
            //             id   : 'Macro',
            //             title: 'Micro map',
            //             type : 'item',
            //             url  : '/micro_map'
            //         }
                       
            //     ]
            // }
        ]
    }
];
