import {FormControl} from '@angular/forms';

export class UsernameValidator {
    public validUsername(fc: FormControl){
        if (UsernameValidator.usernameExists(fc)){
            return (null);
        }
        else {
            return ({validUsername: true});
        }
    }

    static usernameExists(fc: FormControl){
        
        return (true)
    }
}