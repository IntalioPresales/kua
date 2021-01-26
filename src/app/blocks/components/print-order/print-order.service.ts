import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { PrintOrderComponent } from './print-order.component';
import { PrintOrderModule } from './print-order.module';

@Injectable()
export class PrintOrderService {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    componentRef: ComponentRef<PrintOrderComponent>;

    public appendComponentToBody(order) {
        //create a component reference
        this.componentRef = this.componentFactoryResolver.resolveComponentFactory(PrintOrderComponent)
            .create(this.injector);

        const instance = this.componentRef.instance;

        instance.order = order

        instance.onClose.subscribe(() => {
            this.removeComponentFromBody();
        });

        // attach component to the appRef so that so that it will be dirty checked.
        this.appRef.attachView(this.componentRef.hostView);

        // get DOM element from component
        const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        document.body.appendChild(domElem);

        return this.componentRef;
    }

    removeComponentFromBody(componentRef?: ComponentRef<any>) {
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    }

}
