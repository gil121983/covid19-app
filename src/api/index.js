import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

// export const fetchMapCountries = async () => {
//   try {
//     const output = [];
//     const modifiedCountryList = [];
//     const {
//       data: { countries },
//     } = await axios.get(`${url}/countries`);

//     countries.map((country) => {
//       coordinates.map((coordinate) => {
//         if (country.iso2 === coordinate.country_code) {
//           modifiedCountryList.push({
//             name: country.name,
//             iso2: country.iso2,
//             latlng: coordinate.latlng,
//           });
//         }
//         return modifiedCountryList;
//       });
//     });
//     // modifiedCountryList.forEach((country) => {
//     //     setTimeout(()=>{ 
//     //         const { confirmed, recovered, deaths, lastUpdate }=fetchData(country);
//     //    return output.push({
//     //      name: country.name,
//     //      iso2: country.iso2,
//     //      latlng: country.latlng,
//     //      confirmed,
//     //      recovered,
//     //      deaths,
//     //      lastUpdate,
//     //    });
//     //     },10)
       
//     //  });
//     return modifiedCountryList;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const fetchMapData = async () => {
    // let mapData=[];
    // axios.get('https://corona.lmao.ninja/v2/jhucsse')
    // //    .then(res=>console.log(res.data))
    //    .then(res=>{ mapData=res.data })
    //    .catch(err=>console.log(err))
    // return mapData;
    try {
        const res = await axios.get('https://corona.lmao.ninja/v2/jhucsse');
       
       return ( res.data.filter(country => country.stats.confirmed > 720));
        
       
      } catch (error) {
        console.log(error);
      }
};
