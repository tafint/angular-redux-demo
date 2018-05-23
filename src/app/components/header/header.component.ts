import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../../store';
import { Observable } from 'rxjs/Observable';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
	protected stateProp$: any;

	public avatarUrl: String;
	public name: String;

	constructor(private ngRedux: NgRedux<AppState>) {
	}

	ngOnInit() {
		let prop = this.ngRedux.getState().profile;
		this.name = prop.name;
		this.avatarUrl = prop.avatarUrl;
		this.stateProp$ = this.ngRedux.select(state => state);
		this.stateProp$.subscribe(state => {
			this.name = state.name ? state.name : this.name;
			this.avatarUrl = state.avatarUrl ? state.avatarUrl : this.avatarUrl;
		})
	}

}
