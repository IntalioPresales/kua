import { SubCategory } from '../interface/subCategory';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SubCategoriesService {

    private backendUrl: string = environment.backendUrl;

    constructor(
        private httpClient: HttpClient
    ) { }

    public getAllSubCategories() {
        return this.httpClient.get<SubCategory[]>(`${this.backendUrl}/api/subCategories`)
            .pipe(
                map((data: any) => data.data)
            );
    }

    createSubCategory(subCategory: SubCategory) {
        return this.httpClient.post<SubCategory>(`${this.backendUrl}/api/subCategories/${subCategory.category_id}`, subCategory)
            .pipe(map((data: any) => data.data));
    }

    updateSubCategory(subCategory: SubCategory) {
        return this.httpClient.put<SubCategory>(`${this.backendUrl}/api/subCategories/${subCategory.id}`, subCategory)
            .pipe(map((data: any) => data.data));
    }

    getSubCategoryById(id) {
        return this.httpClient.get<SubCategory>(`${this.backendUrl}/api/subCategories/${id}`)
            .pipe(map((data: any) => data.data));
    }

    deleteSubCategory(id) {
        return this.httpClient.delete(`${this.backendUrl}/api/subCategories/${id}`)
    }

}
