# what is mongodb
-- mongodb is a NoSql database
-- the data stores in a collection
-- collect don't have any row or column
-- data is stored in the form of object

## Mongo db v5 commands
--> show dbs = shows all dataBases
--> db.createCollection('name') = create collection of current db
--> db.name.drop() = Delete current database of particular collection
--> db.dropDatabase() = Delete current database

# CRUD in database using command line
--> insert data in collection = db.products.insertone({name:"m40", brand : "samsung", .....})
--> check data into collection = db.products.find()
--> update collection = db.products.upateOne({name:"u10", {$set :{brand :"oppo"}}) : where name="u10" set brand= oppo
--> delete from collection = db.products.deleteOne({"brand" : "apple"})


