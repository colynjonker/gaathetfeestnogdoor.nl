import axios, {AxiosResponse} from "axios";

export const getChartData = async (): Promise<any> => {
    let data = {};
    fetch('https://gaathetfeestnogdoor.nl/api/chart')
        .then(response => response.json())
        .then(data1 => { console.log(data1); data = data1} );
    console.log(data);
    return data;
}


export const getAanwezigData = async (): Promise<any> => {
    let data = {};
    fetch('https://gaathetfeestnogdoor.nl/api/aanwezigen')
        .then(response => response.json())
        .then(data1 => { console.log(data1); data = data1} );
    console.log(data);

    return data;
}

