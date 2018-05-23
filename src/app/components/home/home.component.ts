import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../../store';
import { UPDATE_PROFILE } from '../../actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	@select() stateProp$: any;
	public avatarUrl: String;
	public name: String;
	public prop: any;

	constructor(private ngRedux: NgRedux<AppState>) {

	}

	ngOnInit() {
		let prop = this.ngRedux.getState();
		this.name = prop.profile.name;
		this.avatarUrl = prop.profile.avatarUrl;
	}

	onSubmitForm() {
		this.ngRedux.dispatch({
			type: UPDATE_PROFILE,
			profile: {
				name: this.name,
				avatarUrl: this.avatarUrl
			}
		});
	}

	fileChangeListener($event) {
		var image:any = new Image();
	    var file:File = $event.target.files[0];
	    var myReader:FileReader = new FileReader();
	    var that = this;
	    myReader.onloadend = function (loadEvent:any) {
	        that.avatarUrl = loadEvent.target.result;
	    };
	    myReader.readAsDataURL(file);
	    $event.target.value = null;
	}
}
