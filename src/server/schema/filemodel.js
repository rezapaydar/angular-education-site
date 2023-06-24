var mongoose = require('mongoose');

  // ساختار داده‌ای برای ذخیره عکس
  const fileSchema = new mongoose.Schema({
    filename: String,
    bucketName: String,
    uploadDate: Date,
    length: Number,
    chunkSize: Number,
    md5: String
  });

module.exports=mongoose.model('fileSchema', fileSchema);
