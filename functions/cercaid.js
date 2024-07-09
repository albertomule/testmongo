exports = (payload, response) => {
    const {id} = payload.query;
    var collection = 
      context.services.get("mongodb-atlas").db("Contact").collection("Contatti");
    var t = collection.findOne({id: parseInt(id)});
    return t;
};