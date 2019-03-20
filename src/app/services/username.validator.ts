import {FormControl} from '@angular/forms';

// Still needs tons of work.  Not implemented yet.
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