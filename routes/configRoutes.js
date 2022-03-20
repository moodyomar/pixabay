const indexR = require("./index");
const imagesR = require("./images");

exports.routes = (app) => {
  app.use("/",indexR);
  app.use("/images",imagesR);

  app.use((req,res) => {
    res.json({msg:"Url not found , page 404 "})
  })
}

