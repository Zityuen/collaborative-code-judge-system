module.exports = function(io) {
    var collaborations = [];
    var socketIdSessionId = [];

    io.on('connection', socket => {
        let sessionId = socket.handshake.query['sessionId'];

        socketIdSessionId[socket.id] = sessionId;

        if (!(sessionId in collaborations)) {
            collaborations[sessionId] = {
                'participants': []
            };
        }
        collaborations[sessionId]['participants'].push(socket.id);

        socket.on('change', delta => {
            console.log("change " + socketIdSessionId[socket.id] + " " + delta);
            forwardEvents(socket.id, 'change', delta);
        });

        socket.on('cursorMove', cursor => {
            console.log("cursor " + socketIdSessionId[socket.id] + " " + cursor);
            let sessionId = socketIdSessionId[socket.id];
            cursor = JSON.parse(cursor);
            cursor['socketId'] = socket.id;

            forwardEvents(socket.id, 'cursorMove', JSON.stringify(cursor));
        });

        function forwardEvents(socketId, eventName, dataString) {
            let sessionId = socketIdSessionId[socketId];

            if (sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];
                for (let i = 0; i < participants.length; i++) {
                    if(socketId != participants[i]) {
                        io.to(participants[i]).emit(eventName, dataString);
                    }
                }
            } else {
                console.log("WARNING: could not tie socketId to any collaborations");
            }
        }
    });

}