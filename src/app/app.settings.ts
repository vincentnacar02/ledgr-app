import { environment } from '../environments/environment';

export class AppSettings {

    static apiEndpoint(path: string) : string {
        let url = environment.apiUrl + environment.apiEndpoint + path;
        console.log({url});
        return url;
    }

}