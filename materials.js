require("dotenv").config({path: "../.env"});
const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const path = require("path");
const dbConeection = require("../database");
const { body, validationResult } = require("express-validator");
const cors = require('cors');
const fs = require('fs');

const app = express();
var corsOptions = {
    origin: 'http://localhost:19006', //port number expo runs on
    credentials: true
}
app.use(cors(corsOptions))

//must match frontend port in .env 8084
const port = process.env.MATERIALS_PORT;

app.use(bodyParser,json());

app.use(express.urlencoded({ extended: false}));

app.use(
    cookieSession({
        name: "session",
        keys: [process.env.KEY1, process.env.KEY2],

    })
);

const ifLoggedin = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.json({ Message: "You have been logged out." });
  } else next();
};


app.get("/materials", ifLoggedin, 
 function (req, res) {
  dbConnection
    .execute(
      "SELECT `material_id`, `title`, `material_type`, `material_topic`,`description`, `post_date` FROM `materials` ORDER BY `post_date` DESC"
    )
    .then(([rows]) => {
      res.json({ output: rows });
    })
    .catch((err) => {
      if (err) throw err;
    });
});

/*
// material view images - SEND URLS
app.get("/materials/material_id=:id(\\d+)", //ifLoggedin,
//app.get("/materials/view", ifLoggedin,
  function (req, res) {
    var material_id = req.params.id
    
    //validate material id exists
    dbConnection
      .execute("SELECT `title`, `material_type`, `material_topic`, `description`, `material_url`, `post_date`	FROM `materials` WHERE  `material_id` = ?", [material_id] )
      .then(([rows]) => {
        if (rows.length != 1) {  //material doesnt exists
          res.json({Success: 0, Error:"MATERIAL_ID_DNE"});
        }
        else  // material does exist
        {
          let material_type = rows[0].material_type;
          console.log("material_type", material_type);
          let path = rows[0].material_url;
          console.log("path", path);
          res.json({sucess:1, output: path});
        }
      })
      .catch((err) => {
              if (err) throw err;
       }); 
});
*/

// material view images - SEND blobs

app.get("/materials/material_id=:id(\\d+)", ifLoggedin,
//app.get("/materials/view", ifLoggedin,
  function (req, res) {
    var material_id = req.params.id
    
    //validate material id exists
    dbConnection
      .execute("SELECT `title`, `material_type`, `material_topic`, `description`, `material_url`, `post_date`	FROM `materials` WHERE  `material_id` = ?", [material_id] )
      .then(([rows]) => {
        if (rows.length != 1) {  //material doesnt exists
          res.json({Success: 0, Error:"MATERIAL_ID_DNE"});
        }
        else  // material does exist
        {
          let material_type = rows[0].material_type;
          console.log("material_type", material_type);
          let path = rows[0].material_url;
          console.log("path", path);
          // documents and pictures
          if ( (material_type == "pdf") | (material_type == "jpg") | (material_type == "png") ){ 
                // encode to base64
                var bitmap = fs.readFileSync(path);
                var base64str = Buffer.from(bitmap).toString ('base64');
                console.log("working");
                res.json({success:1, metadata: rows, data: base64str });
          }
          else if ( (material_type == "mp4") ){
            // we have to figure how to send larger files and videos
            res.json({success: 1, metadata: rows, data: "empty for now"})
          }
          else{
            res.json({success: 0, error: "TYPE_DNE"})
          }
        }
      })
      .catch((err) => {
              if (err) throw err;
       }); 
});

//front end connected to 8084 currently
app.listen(port, () => console.log(`Materials server is Running on port ${port}`));



//CHECK IF LOGGED IN OR NOT
//const ifLoggingin = (req, res, next) =>
//if (!req.session.isLoggedIn) {
//    return res.json({Message: "Usted ha sido desconectado."});
//else next();
//};


//app.get("/materials",ifLoggedin,function(req,res) {
//    dbConnection
//    .execute(
//        "Seleccione `material_id`, `title`, `material_type`, `material_topic`, `description`, `post_date` PARA `materials` ORDENAR POR `post_date`"
//    )
//    .then(([rows]) => {
//        res.json({ output: rows }));
//    })
//    .catch((err) => {
//        if (err) throw err;
//    });
//});

// CODE FOR A DOWNLOAD STATUS BAR
// need to download this package:  react-native-vector-icons
<Modal
        transparent
        visible={visible}
        onRequestClose={onRequestClose}
        animationType="slide"
        onBackdropPress={onRequestClose}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={preventParentEvent}>
              <View style={styles.modalWrapper}>
                <Text style={styles.modalTitle}>Descargar Video</Text>
                <Text style={styles.modalSubTitle}>
                Espere hasta que finalice la descarga, no cierre la aplicación.
                </Text>
                <ProgressBar
                  progress={downloadPercent}
                  backgroundColor="#fafafa"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
</Modal>

//CODE TO DOWNLOAD LOCALLY ONTO DEVICE 
// this package (react-native-background-downloader) doesn't work with android
// npm install rn-fetch-blob
// const { config, fs } = RNFetchBlob
// let PictureDir = fs.dirs.PictureDir // this is the pictures directory. You can check the available directories in the wiki.
// let options = {
//   fileCache: true,
//  addAndroidDownloads : {
//    useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
//    notification : false,
//    path:  PictureDir + "/me_"+Math.floor(date.getTime() + date.getSeconds() / 2), // this is the path where your downloaded file will live in
//    description : 'Downloading image.'
//  }
//}
//config(options).fetch('GET', "http://www.example.com/example.pdf").then((res) => {
  // AHHH
//})
