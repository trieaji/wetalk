const { user } = require('../../models')

const socketIo = (io) => {
    io.on('connection', (socket) => {
      console.log('client connect:', socket.id);

      socket.on("load admin contact", async () => {
        try {
          const userContact = await user.findOne({
            where: {
              nama: "Tonari"
            },
            attributes: {
              exclude: ["createdAt", "updatedAt", "password"],
            },
          });
      
        // emit event to send admin data on event “admin contact”
        socket.emit("user contact", userContact)
        } catch (err) {
          console.log(err)
        }
      })

      socket.on('disconnect', () => {
        console.log('client disconnect:', socket.id);
      })

    })
   }
   
   module.exports = socketIo