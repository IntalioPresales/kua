import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-unique-ability',
    templateUrl: './unique-ability.component.html',
    styleUrls: ['./unique-ability.component.scss'],
    animations: fuseAnimations
})
export class UniqueAbilityComponent implements OnInit {

    displayedColumns: string[] = ['position', 'activity', 'category'];
    dataSource = ELEMENT_DATA;
    categories = categories;
    categoriesDistribution;
    newElement: PeriodicElement = {
        position: 1,
        id: null,
        activity: "",
        category: null
    };

    constructor() { }

    ngOnInit() {

        let activitiesCount = this.dataSource.length

        var groups = new Set(this.categories.map(item => item.symbol)),
            results = [];
        groups.forEach(g =>
            results.push({
                name: g,
                percentage: this.dataSource.filter(i => i.category.symbol === g).length * 100 / activitiesCount,
                category: this.dataSource.find(i => i.category.symbol === g).category,
                values: this.dataSource.filter(i => i.category.symbol === g)
            }
            ))

        this.categoriesDistribution = results
        console.log(results)
    }

}

export interface PeriodicElement {
    position?: number;
    id?: string;
    activity?: string;
    category?: ICategory;
}

export interface ICategory {
    id?: string
    name?: string
    symbol?: string
    color?: string
    meta_data?: string[]
}

const categories: ICategory[] = [
    {
        id: "1",
        name: "Unique Ability",
        symbol: "U",
        color: "#6eda4f",
        meta_data: ["Superior skill", "Passion"]
    },
    {
        id: "2",
        name: "Excellent",
        symbol: "E",
        color: "#5bbdf3",
        meta_data: ["Superior skill", "No passion"]
    },
    {
        id: "3",
        name: "Competent",
        color: "#eccc2f",
        symbol: "C",
        meta_data: ["Minimum standards", "Anxiety"]
    },
    {
        id: "4",
        name: "Inompetent",
        color: "#f35858",
        symbol: "I",
        meta_data: ["Failure", "Stress"]
    },
]


const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, id: '1', activity: 'Backend create new features software', category: categories[0] },
    { position: 2, id: '2', activity: 'Backend research concept and content', category: categories[0] },
    { position: 3, id: '3', activity: 'Hold a meeting with a client 1 hour/1:20', category: categories[0] },
    { position: 4, id: '4', activity: 'Write new training live', category: categories[0] },
    { position: 5, id: '5', activity: 'Managing people', category: categories[3] },
    { position: 6, id: '6', activity: 'Creating videos and final content', category: categories[1] },
    { position: 7, id: '7', activity: 'Email checkthrough and answer urgents', category: categories[1] },
    { position: 8, id: '8', activity: 'Backend bugfixing', category: categories[2] },
    { position: 9, id: '9', activity: 'Driving', category: categories[2] },
    { position: 10, id: '10', activity: 'Sales', category: categories[2] },
];