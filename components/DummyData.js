const xml2js = require('xml2js');

const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<resultset count="280" pstate="CO" resultType="campgrounds">
	<result agencyIcon="" agencyName="" contractID="KOAI" contractType="PRIVATE" facilityID="730108" facilityName="Alamosa KOA" faciltyPhoto="/webphotos/KOAI/pid730108/0/80x53.jpg" favorite="N" latitude="37.4745528" listingOnly="Y" longitude="-105.7985806" regionName="" shortName="K0008" sitesWithAmps="N" sitesWithPetsAllowed="N" sitesWithSewerHookup="N" sitesWithWaterHookup="N" sitesWithWaterfront="" state="CO"/>
	<result agencyIcon="" agencyName="" contractID="FLST" contractType="FEDERAL" facilityID="755487" facilityName="ALDER GUARD STATION" faciltyPhoto="/images/nophoto.jpg" favorite="N" latitude="37.7044444" listingOnly="Y" longitude="-106.6466667" regionName="" shortName="USFS4487" sitesWithAmps="Y" sitesWithPetsAllowed="Y" sitesWithSewerHookup="N" sitesWithWaterHookup="N" sitesWithWaterfront="Lakefront" state="CO"/>
	<result agencyIcon="" agencyName="" contractID="FLST" contractType="FEDERAL" facilityID="753475" facilityName="ALPINE RANGER STATION" faciltyPhoto="/images/nophoto.jpg" favorite="N" latitude="38.47345" listingOnly="Y" longitude="-120.0259833" regionName="" shortName="USFS2475" sitesWithAmps="Y" sitesWithPetsAllowed="Y" sitesWithSewerHookup="N" sitesWithWaterHookup="N" sitesWithWaterfront="Lakefront" state="CO"/>
	<result agencyIcon="" agencyName="" contractID="FLST" contractType="FEDERAL" facilityID="754970" facilityName="ALVARADO CAMPGROUND" faciltyPhoto="/images/nophoto.jpg" favorite="N" latitude="38.0788889" listingOnly="Y" longitude="-105.5633333" regionName="" shortName="USFS3970" sitesWithAmps="Y" sitesWithPetsAllowed="Y" sitesWithSewerHookup="N" sitesWithWaterHookup="N" sitesWithWaterfront="Lakefront" state="CO"/></resultset>`;

  xml2js.parseString(xml, (err, result) => {
    if (err) {
      console.log('no', err);
    }

    const json = JSON.stringify(result.result, null, 4);
    // console.log('works?', json)
    return json
  })

  //resultset.result[]
const dummyData =
  {
    "resultset": {
        "$": {
            "count": "280",
            "pstate": "CO",
            "resultType": "campgrounds"
        },
        "result": [
            {
                "$": {
                    "agencyIcon": "",
                    "agencyName": "",
                    "contractID": "KOAI",
                    "contractType": "PRIVATE",
                    "facilityID": "730108",
                    "facilityName": "Alamosa KOA",
                    "faciltyPhoto": "/webphotos/KOAI/pid730108/0/80x53.jpg",
                    "favorite": "N",
                    "latitude": "37.4745528",
                    "listingOnly": "Y",
                    "longitude": "-105.7985806",
                    "regionName": "",
                    "shortName": "K0008",
                    "sitesWithAmps": "N",
                    "sitesWithPetsAllowed": "N",
                    "sitesWithSewerHookup": "N",
                    "sitesWithWaterHookup": "N",
                    "sitesWithWaterfront": "",
                    "state": "CO"
                }
            },
            {
                "$": {
                    "agencyIcon": "",
                    "agencyName": "",
                    "contractID": "FLST",
                    "contractType": "FEDERAL",
                    "facilityID": "755487",
                    "facilityName": "ALDER GUARD STATION",
                    "faciltyPhoto": "/images/nophoto.jpg",
                    "favorite": "N",
                    "latitude": "37.7044444",
                    "listingOnly": "Y",
                    "longitude": "-106.6466667",
                    "regionName": "",
                    "shortName": "USFS4487",
                    "sitesWithAmps": "Y",
                    "sitesWithPetsAllowed": "Y",
                    "sitesWithSewerHookup": "N",
                    "sitesWithWaterHookup": "N",
                    "sitesWithWaterfront": "Lakefront",
                    "state": "CO"
                }
            },
            {
                "$": {
                    "agencyIcon": "",
                    "agencyName": "",
                    "contractID": "FLST",
                    "contractType": "FEDERAL",
                    "facilityID": "753475",
                    "facilityName": "ALPINE RANGER STATION",
                    "faciltyPhoto": "/images/nophoto.jpg",
                    "favorite": "N",
                    "latitude": "38.47345",
                    "listingOnly": "Y",
                    "longitude": "-120.0259833",
                    "regionName": "",
                    "shortName": "USFS2475",
                    "sitesWithAmps": "Y",
                    "sitesWithPetsAllowed": "Y",
                    "sitesWithSewerHookup": "N",
                    "sitesWithWaterHookup": "N",
                    "sitesWithWaterfront": "Lakefront",
                    "state": "CO"
                }
            },
            {
                "$": {
                    "agencyIcon": "",
                    "agencyName": "",
                    "contractID": "FLST",
                    "contractType": "FEDERAL",
                    "facilityID": "754970",
                    "facilityName": "ALVARADO CAMPGROUND",
                    "faciltyPhoto": "/images/nophoto.jpg",
                    "favorite": "N",
                    "latitude": "38.0788889",
                    "listingOnly": "Y",
                    "longitude": "-105.5633333",
                    "regionName": "",
                    "shortName": "USFS3970",
                    "sitesWithAmps": "Y",
                    "sitesWithPetsAllowed": "Y",
                    "sitesWithSewerHookup": "N",
                    "sitesWithWaterHookup": "N",
                    "sitesWithWaterfront": "Lakefront",
                    "state": "CO"
                }
            }
        ]
    }
}

export default dummyData;

