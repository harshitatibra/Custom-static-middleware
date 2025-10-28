const fs = require('fs')
const path = require("path")

function static(staticpath){
    return (req,res,next)=>{
        fs.readdir(staticpath,(error,files)=>{
            if(error) {
                console.log(error)
                return
            }
            if(files.includes('index.html') && (req.path=='/')){
                res.sendFile(path.join(__dirname,staticpath,'index.html'))
            }
            if(files.includes(req.path.slice(1))){
                res.sendFile(path.join(__dirname,staticpath,req.path.slice(1)))
            }
            console.log(files)
        })
        // res.sendFile(path0)
    }
}

module.exports=static