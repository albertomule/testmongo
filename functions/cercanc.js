exports = (payload, response) => {
    const {n} = payload.query;
    const {c} = payload.query;
    var collection = 
      context.services.get("mongodb-atlas").db("Contact").collection("Contatti");
    var t = collection.findOne({nome: n, cognome: c});
    return t;
};