import { Component, Input } from "@angular/core";

const defaultValues = {
    titre: 'Chat qui tire la gueule',
    contenu: 'Il ressemble à Steve 🤣',
    image: 'https://images.ctfassets.net/denf86kkcx7r/6roIBf4MbtVmoxmZs8Tgle/9bd50cd891601d6a92a57a71ebd4222c/vision_du_chat?fm=webp&w=612'
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    // private _model: { titre?: string, contenu?: string, image?: string } = defaultValues;
    
    // @Input()
    // set model(value: { titre?: string, contenu?: string, image?: string }){
    //     this._model = { ...defaultValues, ...value }
    // }

    // get model() {
    //     return this._model;
    // }

    @Input()
    model: { titre?: string, contenu?: string, image?: string } = defaultValues;

    constructor() {
    }
}