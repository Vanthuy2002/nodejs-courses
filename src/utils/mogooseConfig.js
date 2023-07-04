// this fn to return object by mongooseArr
const mutilMongooseObject = (mongooseArr) => {
  return mongooseArr.map((mongoose) => mongoose.toObject());
};

// this fn to return mongoose object -> object JS
const mongooseToObject = (mongoose) => {
  return mongoose ? mongoose.toObject() : mongoose;
};

// or oneway to short -> myCourse.find({}).lean().exec()

module.exports = { mutilMongooseObject, mongooseToObject };
