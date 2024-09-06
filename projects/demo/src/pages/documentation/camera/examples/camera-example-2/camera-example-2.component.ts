import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {DfDataModel} from '@ng-draw-flow/core';
import {
    dfPanzoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {PanComponent} from '../../nodes/pan/pan.component';

@Component({
    standalone: true,
    selector: 'app-camera-example-2',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    templateUrl: './camera-example-2.component.html',
    styleUrls: ['./camera-example-2.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            pan: PanComponent,
        }),
        dfPanzoomOptionsProvider({
            topPosition: 1,
            leftPosition: null,
        }),
    ],
})
export default class CameraExample2Component {
    protected data: DfDataModel = {
        nodes: new Map().set('node-1', {
            id: 'node-1',
            data: {type: 'pan'},
            position: {x: 0, y: 0},
        }),
        connections: [],
    };

    public form = new FormControl(this.data);
}
