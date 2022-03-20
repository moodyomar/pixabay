const indexR = require("./index");

exports.routes = (app) => {
  app.use("/",indexR);

  app.use((req,res) => {
    res.json({msg:"Url not found , page 404 "})
  })
}

