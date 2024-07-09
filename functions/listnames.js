exports = function(payload, response) {
var collection =
context.services.get("mongodb-atlas").db("Contact").collection("Contatti");
var s = collection.find( {}, {"_id":0,nome:1} ).toArray().then (
(proj) => { return proj.map( doc => doc.nome ) }
);
return s;
};