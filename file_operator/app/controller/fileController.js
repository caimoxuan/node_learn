var fs = require("fs");
var path = require("path");
var url = require("url");


exports.show = function(req, res, next){
  console.log("test:"+next);
  fs.readFile("./file/input.txt", function(err, data){
    if(err){
      console.log(err);
      return;
    }
    res.end(data);

  });
};

exports.download = function(req, res, next){
  var parse = url.parse(req.url, true).query;
  var filepath = "./file/";
  var filename = parse.filename;
  try{
    var stats = fs.statSync(filepath+filename);
  }catch(err){
    console.log(err);
    res.render("404");
  }

  if(stats.isFile()){
    res.set({
      "Content-Type":"application/octet-stream",
      "Content-Disposition":"attachment;filename = " + filename,
      "Content-Length":stats.size
    });
    console.log(filepath);
    fs.createReadStream(filepath+filename).pipe(res);
  }else{
    res.end(404);
  }
};

exports.drictory = function(req, res, next){
  var filePath = "./file/";
  fs.readdir(filePath, function(err, results){
    if(err) throw err;
    if(results.length>0) {
    var files = [];
    results.forEach(function(file){
      if(fs.statSync(path.join(filePath, file)).isFile()){
        files.push(file);
        console.log(file);
      }
    });
    res.set({"Content-Type":"application/json"});
    res.end(JSON.stringify(files));
    } else {
      res.end('当前目录下没有文件');
    }
  });
};
