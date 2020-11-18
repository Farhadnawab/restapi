
Installing
===

Run: `npm install`


Starting the server
===

Run: `npm run dev`


The service listens at the 3000 port.
The following paths are exposed:

`GET /api/car-insurance/car-plate/$licensePlate`

Responds with an car data object that matches
the given license plate


`GET /api/car-insurance/v2/cars`

Responds with a list of all known cars models


`GET /api/car-insurance/v2/cars?make=$make`

Responds with a list of known models of give maker


`GET /api/car-insurance/v2/cars?make=$make&model=$model`

Responds with the car data model for respective maker and model.
