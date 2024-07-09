exports = (payload, response) => {
    var collection = context.services.get("mongodb-atlas").db("Contact").collection("Contatti");
    var t = collection.find();
    return t;
};