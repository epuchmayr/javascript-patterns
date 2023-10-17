
class ChatRoom {
  logMessage(user, message) {
    const time = new Date();
    const sender = user.getName();
 
    console.log(`${time} [${sender}]: ${message}`);
    document.getElementById('chatlog').append(`
    ${time} [${sender}]: ${message}\n`)
  }
}
 
class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }
 
  getName() {
    return this.name;
  }
 
  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

function Mediator() {
  return (
    <>
      <pre id="chatlog" style={{height: '200px', overflow: 'auto'}}></pre>
      <button onClick={() => {user1.send("Hi there!");}}>hi there</button>
      <button onClick={() => {user2.send("Hey!");}}>hey</button>
    </>
  );
}


export default Mediator