
import { Telegraf } from 'telegraf'
import { Low, JSONFile } from 'lowdb'
// import LocalSession  from 'telegraf-session-local';

const BOT_TOKEN = '5160481843:AAFqE83REo_13bRlz907oQBQZwFWpDsLqcM'

const file = './users.json';
const adapter = new JSONFile(file)
const db = new Low(adapter)


await db.read();

db.data ||= { users: [], passwords: [] }


const bot = new Telegraf(BOT_TOKEN)
// bot.use((new LocalSession({ database: 'users.json' })).middleware())

bot.command('quit', (ctx) => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id)
  
    // Using context shortcut
    ctx.leaveChat()
  })

  
// bot.on('text', (ctx) => {
//     // Explicit usage
//     ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

//     console.log(ctx)
//     // Using context shortcut
//     // ctx.reply(`Hello ${ctx.state.role}`)
//   })
  



  bot.command('start', (ctx)=>{
      console.log(ctx.chat);
      console.log('eeeeeend')

      bot.telegram.sendMessage(ctx.chat.id,'Welcome',
      {
          reply_markup:{
              inline_keyboard:[
                  [
                      {text: 'Get "id"', callback_data: 'one'},
                      {text: 'Registration', callback_data: 'registrate'}
                  ]
              ]
          }
      }
      )
  })

  bot.action('one',(ctx)=>{
      console.log(ctx.chat.id);
      ctx.answerCbQuery('Your id:');
      ctx.reply(ctx.chat.id)
  })


  bot.action('registrate',(ctx)=>{
      ctx.answerCbQuery('Go password...');

      const p = goPassword(ctx)

      console.log('password is:');
      console.log('****');
      ctx.reply('admin now can send you password. Then just enter valid password here (Password valid for 2 min)')
      let inputState = false;
      bot.hears(`${p}`, (ctxx) => {
          if(ctx.chat.id === ctxx.chat.id){
            if(!inputState){
                ctxx.reply('Password accept');
                saveToLocalDB(ctx, ctx.chat)
                inputState = true;
            }else{
                ctxx.reply('all done')
            }
          }else{
            ctxx.reply('What??')
          }
      })

    //   
  })
  


  bot.command('users',(ctx)=>{
      if(checkUsers(ctx.chat.id, 'role') === 'admin'){
        console.log(db.data.users);
        ctx.reply(db.data.users)
      }else{
         return ctx.reply('Not Enough Rights')
      }
  })



  bot.launch()
  
  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))


  // PASWORD GENERATOR
  function goPassword(ctx) {
      const pass = Math.floor(Math.random() * 9999) + 1000;
      console.log(pass);
      db.data.passwords.push(pass);
      console.log('GO PASS');
    //   console.log(ctx);
      const admin_msg = `pass: ${pass} \n\nFor:\n${ctx.chat.username === undefined ? '': `username: @${ctx.chat.username}\n`}Name & Last Name: ${ctx.chat.first_name} ${ctx.chat.last_name}\nID: ${ctx.chat.id}`;
    //   console.log(admin_msg);
    
        for(let i = 0; i < db.data.users.length; i++){
            console.log(db.data.users);
            if(db.data.users[i].role === 'admin'){
                ctx.telegram.sendMessage(db.data.users[i].id, admin_msg)
            }
        }
      setTimeout(()=>{
        deletePass(pass);
      },10000)
    //   2 * 60 * 1000
      return pass;
  }

  function deletePass(pass) {
      
    db.data.passwords = db.data.passwords.filter((item)=>{
        return item !== pass
    });
    db.write;
    console.log('END PASS');
    // console.log(db.data.passwords);
  }


  //saving users to db
  async function saveToLocalDB(ctx,chat) {
    

    if(checkUsers(chat.id)){
        return ctx.reply('Same user...')
    }



    db.data.users.push({
        ...chat,
        role: 'user'
    });

    await db.write()
    .then(()=>{
        ctx.reply('Saved')
    })
    .catch(err=>{
        ctx.reply('error')
    })
      
  }


  function checkUsers(id, type = 'same') {
    if(type === 'same'){
        for (let i = 0; i < db.data.users.length; i++) {
            const element = db.data.users[i];
            if(element.id === id) return true;
        }
        return false;
    }

    if(type === 'role'){
        for (let i = 0; i < db.data.users.length; i++) {
            const element = db.data.users[i];
            if(element.id === id) return element.role;
        }
        return false;
    }
  }




  export function botFastReply (req,res){
      let msg = 
`
Быстрая заявка:

Имя: ${req.body.name}
E-Mail: ${req.body.mail}
Телефон: ${req.body.phone}
`      

      for (let i = 1; i < db.data.users.length; i++) {
          const user = db.data.users[i];

          bot.telegram.sendMessage(user.id, msg)
      }

      res.json(true);
    // console.log('REEEEQ');
    // console.log(req.body);
      
  }


  export function botBigReply(req,res) {
    const data = req.body;

    let msg = 
`
Заявка:

Имя: ${data.name}
E-Mail: ${data.mail}
Телефон: ${data.phone}

Cтатус: ${data.status}
Процедура: ${data.procedure}

Cообщение: 
${data.msg}
`    

    for (let i = 1; i < db.data.users.length; i++) {
      const user = db.data.users[i];

      bot.telegram.sendMessage(user.id, msg)
    }

    res.json(true);
  }