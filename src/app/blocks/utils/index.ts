import { FormGroup } from '@angular/forms';


export class AppUtils {

    /**
     * @Remark show errors option will reflect ui 
     * 
     * @static
     * @param {FormGroup} form 
     * @param {boolean} showErrors 
     * @returns {boolean} 
     * 
     * @memberOf AppUtils
     */
    public static validateGroupForm(form: FormGroup, showErrors: boolean): boolean {
        if (!form.valid) {
            if (showErrors) {
                Object.keys(form.controls).map((value, i) => {
                    form.get(value).markAsDirty()
                    form.get(value).markAsTouched()
                })
            }
            return false;
        }
        return true;
    }

}