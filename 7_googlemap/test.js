const fs = require('fs');


function getStores(){
    var jsonObject = JSON.parse(fs.readFileSync('myco_location.json', 'utf8'));
        for(const locations in jsonObject){
            for(const location in jsonObject[locations]){
                // console.log(`${jsonObject[locations][location]}`);
                for(const it in jsonObject[locations][location]){
                    console.log(`Item${it}: `);
                    console.log(jsonObject[locations][location][it].latitude);
                    console.log(jsonObject[locations][location][it].longitude);
                    console.log(jsonObject[locations][location][it].type);
                    console.log(jsonObject[locations][location][it].$revenue);
                    console.log(' ');

                }
            }
        }
}

getStores();