import { Component, Input } from '@angular/core';

@Component({
	selector: 'panel',
	templateUrl: './panel.component.html'
})

export class PanelComponent {
	@Input()
	employeesCount: Number;

	@Input()
	appDevCount: Number;

	@Input()
	QACount: Number;

	@Input()
	supportCount: Number;
}
