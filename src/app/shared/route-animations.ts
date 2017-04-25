import {animate,trigger,transition,style} from '@angular/core';



export const routeSlideStateTrigger = trigger('routeFadeState', [
	transition(':enter', [
		style({
			transform: 'translateY(-100%)'
		}),
		animate(300)
	]),
	transition(':leave', animate(300,style({
		transform: 'translateY(100%)'
	})))

]);