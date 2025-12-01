Mongo().getDBNames().forEach(function(db){

    if (['admin', 'local', 'config'].indexOf(db) <0) {
        Mongo().getDB(db).dropDatabase();

}

});