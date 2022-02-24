const express = require('express');
const app = express();
require('dotenv').config(); // 引用 .env 環境變數

app.use('/next',express.static(__dirname + '/public/out')); //主機資源設定為 public 資料夾
app.use(express.json());  //bodyParser

// Server listen
const PORT = process.env.PORT || 8060;

// drivers 內容
var drivers = [
    {
      id : 1,
      no : '33',
      name : "Max Verstappen",
      team : 'Red Bull',
      nation : '荷蘭',
      point : 262
    },
    {
      id : 2,
      no : '44',
      name : "Lewis Hamilton",
      team : 'Mercedes',
      nation : '英國',
      point : 256
    },
    {
      id : 3,
      no : '77',
      name : "Valtteri Bottas",
      team : 'Mercedes',
      nation : '芬蘭',
      point : 177
    },
    {
      id : 4,
      no : '11',
      name : "Sergio Perez",
      team : 'Red Bull',
      nation : '墨西哥',
      point : 167
    }
  ]
  // http://localhost:8080
  app.get('/',(req,res)=>{
    console.log('/');
    res.send("Node.js + Express + NEXT.js");
  })
  
  // 讀取紀錄 (R)
  // 顯示全部車手資料
  // http://localhost:8080/drivers
  app.get('/drivers',(req,res)=>{
    console.log('/drivers (GET)');
    res.json({
      status:true,
      description:'資料存在',
      data:drivers
    });
  })
  // 顯示33號紀錄
  // http://localhost:8080/driver/33
  app.get('/driver/:no',(req,res)=>{
    console.log('/driver/:no (GET)');
    let myNo = req.params.no  // 取得 /driver/:no 的參數
    let xindex = -1;  // 搜尋結果
    console.log('Query No : ' + myNo);
    // for loop 找尋資料
    for (let x = 0; x < drivers.length; x++){
      if (myNo == drivers[x].no){  // 如果比對正確
        xindex = x;
        break;
      }
    }
    // 判斷比對是否正確
    // 找不到
    if (xindex == -1){
      res.json({
        status:false,
        description:'資料找不到',
        data:{}
      });
    }
    // 找到資料
    else {
      res.json({
          status:true,
          description:'資料存在',
          data:drivers[xindex]
        }
      )
    }
  })
  
  app.listen(PORT, ()=>{
    console.log('Server : http://localhost:' + PORT);
  })