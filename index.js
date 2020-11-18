
'use strict';

const http = require('http')
const url = require('url');

const licensePlate = {
    body: {
        prods: {
            cars: [
                {
                    make: 'Fiat',
                    model: 'Punto',
                    type: '1.4',
                    realHP: '97',
                    cc: '1355',
                    engine: 'other',
                    fuel: 'Diesel',
                    price: '2004'
                }
            ]
        }
    }
};


const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
}

function serveCarMakeModel(req, res) {
    const params = url.parse(req.url,true).query;

    console.log('params:', params);

    if (Object.keys(params).length == 0) {
        res.writeHead(200, headers);
        res.write(JSON.stringify({"make":["ABARTH","ALFA ROMEO","ASIA","ASTON MARTIN","AUDI","BENTLEY","BMW","CADILLAC","CHANGAN","CHEVROLET","CHRYSLER","CITROEN","DACIA","DAEWOO","DAEWOO - FSO","DAIHATSU","DFM","DODGE","DS","FERRARI","FIAT","FORD","FORD USA","GOUPIL","HONDA","HUMMER","HX AUTO","HYUNDAI","INFINITI","ISUZU","IVECO","JAC","JAGUAR","JEEP","JIAYUAN","KIA","LADA","LAMBORGHINI","LANCIA","LAND ROVER","LANDWIND","LEXUS","LIFAN","LOTUS","MASERATI","MAZDA","MERCEDES-BENZ","MG","MINI","MITSUBISHI","NISSAN","OPEL","PEUGEOT","PIAGGIO","PONTIAC","PORSCHE","RENAULT","ROVER","SAAB","SEAT","SH AUTO","SKODA","SMART","SSANGYONG","SUBARU","SUZUKI","TATA","TESLA","TOYOTA","VOLKSWAGEN","VOLVO","ZASTAVA"],"count":72,"timestamp":1605265470}));
        res.end();
    } else if ('make' in params && 'model' in params) {
        res.writeHead(200, headers);
        res.write(JSON.stringify({"fuelType":["Petrol - Gasoline","Diesel"],"count":2,"timestamp":1605266760}));
        res.end();
    } else if ('make' in params) {
        res.writeHead(200, headers);
        res.write(JSON.stringify({"model":["124 Spider","500","500L","500X","Albea","Barchetta","Brava","Bravo","Cinquecento","Coupe","Croma","Doblo","Doblo Cargo","Ducato","Ducato Passenger","Fiorino","Fiorino Qubo","Freemont","Fullback","Grande Punto","Grande Punto Van","Idea","Linea","Marea","Multipla","Palio","Panda","Panda Cross","Panda Van","Punto","Punto Evo","Punto Van","Qubo","Scudo","Sedici","Seicento","Stilo","Strada","Talento","Talento Combi","Tempra","Tipo","Ulysse","Uno"],"count":44,"timestamp":1605266593}));
        res.end();
    }
}

const server = http.createServer(function(req, res) {
    const params = url.parse(req.url,true).query;
    console.log('serving', req.method, req.url);

    if (req.url.startsWith('/api/car-insurance/car-plate')) {
        res.writeHead(200, headers);

        if ('licensePlate' in params && 'ipo3245' === params.licensePlate)
            res.write(JSON.stringify(licensePlate));
        else
            res.write(JSON.stringify({"body": {"prods": {"cars": []}}}));
        
        res.end();
    } else if (req.url.startsWith('/api/car-insurance/v2/cars')) {
        serveCarMakeModel(req, res);
    } else {
        res.writeHead(404, headers);
        res.write(JSON.stringify({ message: 'not found' }));
        res.end();
    }
})

server.listen(3000)

