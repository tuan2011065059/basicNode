// let check = 'welcome node.js 48';
// console.log(check)
// import thư viện express 
import express from 'express';
 // khởi tạo ứng dụng
 const app = express();

 // khai báo port mặc định cho BE 
 const port = 3000;

 // khai báo api 
 // dường dẫn api kiểu string
 // 2; funcition xử lý api
 // domain default của BE http localhot : 3000
//  => http localhot:3000/
// req nhậ yêu cầu từ client : FE posmain
// res trả kết quả client 
 app.get('/', (rep, res) =>{
    res.send('welcome to nodeJS 48')

 })
app.get('/test', (req, res) => {
    res.send('Test API 123456');
})
// để BE luôn có code mới cài nodemon
 app.listen(port, () => {
 console.log (`server is running on port ${port}`);

 })