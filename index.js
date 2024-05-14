const { Client, GatewayIntentBits } = require('discord.js');
const { Guilds, GuildMessages, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, MessageContent] });
client.login('MTIzOTE2MjgwODM2NTc0ODI4NQ.GQbg9D.SvPMvgqfXrMIOByrtvge9A8uJxt0-X-8rXa5xk');

client.once('ready', () => console.log(client.user.tag+' 준비 완료!'));

client.on('messageCreate', (msg) => {
    if (msg.author.bot) return
        const cmd = msg.content
    
        if (cmd == '한하람 자기소개')
        msg.channel.send('저는 세상에서 제일 귀여운 한하람이야..! 이진우 여자친구지!')
    
        if (cmd == '한하람 뭐해?')
        msg.channel.send('저는 어제도 오늘도 내일도 항상 이진우님 생각밖에 없어!!')
    
        if (cmd == '이진우')
            msg.channel.send('한하람 새끼 ㅋ')

        if (cmd == '병신')
            msg.channel.send('병신은 이진우지!')

        if (cmd == '송지원')
            msg.channel.send('송지원이 누구야?? 저보다 못생긴 사람은 잘 몰라서..')
    
        if (cmd == '김상록')
            msg.channel.send('만년 2등년 ㅋ')
    
        if (cmd == '이우진')
            msg.channel.send('어머 저는 게이가 취향인데.. 이진우랑 같이 만나봐야겠다..ㅎㅎ')
    
        if (cmd == '장주완')
            msg.channel.send('한하람보다 못한년 ㅋ')
    
        if (cmd == '어가온')
            msg.channel.send('메기')
    
        if (cmd == '안지성')
            msg.channel.send('박지성 짭 ㅋ')
    
        if (cmd == '이유나')
            msg.channel.send('내가 이유나랑 바람피는건 안비밀~')
    
        if (cmd == '윤태경')
            msg.channel.send('윤태경이 날 짝사랑하고 있어서 이진우랑 헤어질까해..')
    
        if (cmd == '김민준')
            msg.channel.send('어가온 따까리쉨 ㅋㅋ 나보다 못한년 ㅋ')
    
        if (cmd == 'ㅗ')
            msg.channel.send('어머 내 ㅈ이잖아?')
    
        if (cmd == 'ㅋ')
            msg.channel.send('내가 미안해.. 그렇게 웃지 말아줘..')
    
        if (cmd == '이유나년')
            msg.channel.send('ㅋㅋ 이유나년보단 하람이가 좀더 귀엽지 ㅋ')
    
        if (cmd == 'ㅇㅇ')
            msg.channel.send('쌍부랄을 묘사한거야..? 나 성희롱 당한거같아.. 너네 신고할거야!')
    
        if (cmd == 'ㅈ같네')
            msg.channel.send('난 ㅈ이 없는걸..?')
    
        if (cmd == 'ㅈ 같네')
            msg.channel.send('난 ㅈ이 없는걸..?')
    
        if (cmd == 'ㅅㅂ')
            msg.channel.send('시바견처럼 귀엽다구? 내가? 정말 고마워 ㅠㅜ 이제부터 너랑 1일!')
 
        if (cmd == '조퇴')
            msg.channel.send('상록아 조퇴한게 꼬아? 그럼 너도 나같이 찐따던가 ㅋ')

    });