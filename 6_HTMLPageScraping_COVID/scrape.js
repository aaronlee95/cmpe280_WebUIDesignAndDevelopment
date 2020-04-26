const request = require('request');
const cheerio = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic'
var MongoClient = require('mongodb').MongoClient;
var db_url = "mongodb://localhost:27017/";

function scrapeData(){
    request(url, (error, response, html) =>{

        MongoClient.connect(db_url, function(error, db)
        {
          if (error) throw error;
          var dbo = db.db("Coronavirus");

          if(!error && response.statusCode == 200){
              const $ = cheerio.load(html);

              // Find Total Confirmed and Recovered Cases
              var total_confirmed = 0;
              var total_recovered = 0;
              const total = $('.covid-total-row b').each((i,el) => {
                  if(i == 1){
                      total_confirmed = $(el).text();
                  }
                  if(i == 3){
                      total_recovered = $(el).text();
                  }
              });
              // console.log("Total Confirmed: ", total_confirmed);
              // console.log("Total Recovered: ", total_recovered);

              // Find # of Cases, Deaths, and Recovered for Each Country
              var country = "";
              var cases = "";
              var deaths = "";
              var recovered = "";
              const table = $('#thetable > tbody > tr').each((i, el)=> {
                  if($(el).find('th > a').text() != "" ){

                      country = $(el).find('th > a').text();
                      $(el).find('td').each((it, elm) => {
                          if(it == 0){
                              // console.log("\tCases: ", $(elm).text());
                              // cases.push($(elm).text());
                              cases = $(elm).text();
                          }
                          if(it == 1){
                              // console.log("\tDeaths: ", $(elm).text());
                              // deaths.push($(elm).text());
                              deaths = $(elm).text();
                          }
                          if(it == 2){
                              // console.log("\tRecovered: ", $(elm).text());
                              // recovered.push($(elm).text());
                              recovered = $(elm).text();
                          }
                          if(it == 3){
                            var myobj = {Country: country, Cases: cases, Deaths: deaths, Recovered: recovered};

                            console.log(myobj);
                            dbo.collection("Country_Results").insertOne(myobj, function(err, res)
                            {
                              if(err) throw err;
                              console.log("Inserted: ", myobj);
                            });
                          }
                      });
                  }
              });
              var obj = {Confirmed: total_confirmed, Recovered: total_recovered};
              dbo.collection("Total").insertOne(obj), function(err, res)
              {
                if(err) throw err;
                console.log("Inserted: ", obj);
              }
              // console.log(country);
              // console.log("Country: ", country.length);
              // console.log("Cases: ", cases.length);
              // console.log("Deaths: ", deaths.length);
              // console.log("Recovered: ", recovered.length);
        }
        db.close();

    });
    });
  }

scrapeData();

