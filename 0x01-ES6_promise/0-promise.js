import { Promise } from 'es6-promise';
export default function getResponseFromAPI() {
    const myPromise = new Promise(
        (resolve) => {
            resolve();
        }
    );
    return myPromise;
}