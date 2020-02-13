import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
	protected HandleError(error: HttpErrorResponse | any) {
        let errMsg: string;
        if (error instanceof HttpErrorResponse){
            switch(error.status){
                case 401:
                    errMsg = "Authentication failed.";
                    //could redirect to login page from here, preserving the page's data.
                    break;
                case 403:
                    errMsg = "Unauthorized access."
                case 404:
                    errMsg = "Can't connect to backend server.";
                    break;
                case 500:
                    errMsg = error["_body"];
                    break;
                default:
                    // console.log(error["_body"]);
                    return Observable.throw(error);
            }
        } else {
            throw error;
        }
        return Observable.throw(errMsg);
    }
}
