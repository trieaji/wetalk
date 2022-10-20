const {siswa} = require('../../models')

//add siswa
exports.addSiswa = async (req,res) => {
    try {
        const data = req.body

        let newSiswa = await product.create({
            ...data,
            image: req.file.filename
          })

          newSiswa = JSON.parse(JSON.stringify(newSiswa))

          newSiswa = {
            ...newSiswa,
            image: process.env.FILE_PATH + newSiswa.image
          }

           // code here
        res.send({
        status: 'success',
        data: {
          newSiswa
        }
  
      })
    } 
    
    catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
          });
    }
}