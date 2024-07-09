exports = function(payload, response) {
const {n} = payload.query;
console.log("n=", n);
var collection =
context.services.get("mongodb-atlas").db("Contact").collection("Contatti");
var t = collection.findOne({nome: n}).then(
doc => doc.cognome.toString()
);
return t;
};