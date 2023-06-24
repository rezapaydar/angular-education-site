var mongoose = require('mongoose');

  // ساختار داده‌ای برای ذخیره محتوای عکس
  const chunkSchema = new mongoose.Schema({
    files_id: mongoose.Schema.Types.ObjectId,
    n: Number,
    data: Buffer
  });