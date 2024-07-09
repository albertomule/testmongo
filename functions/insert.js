exports = function(payload, response) {
const {n} = payload.query;
const {c} = payload.query;
const {o} = payload.query;
const {co} = payload.query;
const {id} = payload.query;
var collection =
context.services.get("mongodb-atlas").db("Contact").collection("Contatti");
var t = collection.count({nome: n})
.then( (cnt) => { if ( cnt === 0 ) {
var doc={"nome": n, "cognome": c, "isOnline": o === 'true', "color": co, "id": parseInt(id)};
collection.insertOne(doc);
return doc;
} else {
return ("Gia’ presente");
} } );
return t;
};