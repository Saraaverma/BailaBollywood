const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// get the full date
function date () {
  let actualDate = new Date();
  // Individual
  let day = actualDate.getDate();
  let month = actualDate.getMonth() + 1;
  let year = actualDate.getFullYear();
  if (day < 10)
    day = `0${actualDate.getDate()}`;
  if (month < 10)
    month = `0${actualDate.getMonth() + 1}`;

  let finalDate = `${day}-${month}-${year}`;

  return finalDate;
}

const InterviewSchema = new Schema({
  
  title: {type: String, trim: true, required: true},
  image: {type: String, required: true, unique: false },
  content: {type: String, required: true},
  creator: {type: String, required: true},
  tag:{type:String , required:true},
  created:  {type: Date, default: Date.now},
  time: {type: String, default: date()},
  video:{type:String }
})

module.exports = mongoose.model('Interview', InterviewSchema);
