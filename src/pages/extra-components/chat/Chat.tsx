import { Card, Chat, ChatForm, ChatMessageType, FileExt } from '@nebular-react/core';
import React, { useState } from 'react';
import useStyles from './Chat.styles';

const botAvatar: string =
  'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png';

const gifsLinks: string[] = [
  'https://media.tenor.com/images/ac287fd06319e47b1533737662d5bfe8/tenor.gif',
  'https://i.gifer.com/no.gif',
  'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif',
  'http://www.reactiongifs.com/r/wnd1.gif'
];
const imageLinks: string[] = [
  'https://picsum.photos/320/240/?image=357',
  'https://picsum.photos/320/240/?image=556',
  'https://picsum.photos/320/240/?image=339',
  'https://picsum.photos/320/240/?image=387',
  'https://picsum.photos/320/240/?image=30',
  'https://picsum.photos/320/240/?image=271'
];
const fileLink: string = 'http://google.com';

const botReplies = [
  {
    regExp: /([H,h]ey)|([H,h]i)/g,
    answerArray: ['Hello!', 'Yes?', 'Yes, milord?', 'What can I do for you?'],
    type: 'text',
    reply: {
      message: '',
      type: 'text',
      reply: false,
      date: new Date(),
      sender: 'Bot',
      avatar: botAvatar
    }
  },
  {
    regExp: /([H,h]elp)/g,
    answerArray: [
      `No problem! Try sending a message containing word "hey", "image",
    "gif", "file", "map", "quote", "file group" to see different message components`
    ],
    type: 'text',
    reply: {
      message: '',
      type: 'text',
      reply: false,
      date: new Date(),
      sender: 'Bot',
      avatar: botAvatar
    }
  },
  {
    regExp: /([I,i]mage)|(IMAGE)|([P,p]ic)|(Picture)/g,
    answerArray: ['Hey look at this!', 'Ready to work', 'Yes, master.'],
    type: 'pic',
    reply: {
      message: '',
      reply: false,
      date: new Date(),
      type: 'file',
      files: [
        {
          url: '',
          type: 'image/jpeg'
        }
      ],
      sender: 'Bot',
      avatar: botAvatar
    }
  },
  {
    regExp: /([G,g]if)|(GIF)/g,
    type: 'gif',
    answerArray: ['No problem', 'Well done', 'You got it man'],
    reply: {
      message: '',
      reply: false,
      date: new Date(),
      type: 'file',
      files: [
        {
          url: '',
          type: 'image/gif'
        }
      ],
      sender: 'Bot',
      avatar: botAvatar
    }
  },
  {
    regExp: /([F,f]ile group)|(FILE)/g,
    type: 'group',
    answerArray: ['Take it!', 'Job Done.', 'As you wish'],
    reply: {
      message: '',
      reply: false,
      date: new Date(),
      type: 'file',
      files: [
        {
          url: fileLink,
          icon: 'file-text-outline'
        },
        {
          url: '',
          type: 'image/gif'
        },
        {
          url: '',
          type: 'image/jpeg'
        }
      ],
      icon: 'file-text-outline',
      sender: 'Bot',
      avatar: botAvatar
    }
  },
  {
    regExp: /([F,f]ile)|(FILE)/g,
    type: 'file',
    answerArray: ['Take it!', 'Job Done.', 'As you wish'],
    reply: {
      message: '',
      reply: false,
      date: new Date(),
      type: 'file',
      files: [
        {
          url: fileLink,
          icon: 'file-text-outline'
        }
      ],
      icon: 'file-text-outline',
      sender: 'Bot',
      avatar: botAvatar
    }
  },
  {
    regExp: /([M,m]ap)|(MAP)/g,
    type: 'map',
    answerArray: ['Done.', 'My sight is yours.', 'I shall be your eyes.'],
    reply: {
      message: '',
      reply: false,
      date: new Date(),
      type: 'map',
      latitude: 53.914321,
      longitude: 27.5998355,
      sender: 'Bot',
      avatar: botAvatar
    }
  },
  {
    regExp: /([Q,q]uote)|(QUOTE)/g,
    type: 'quote',
    answerArray: ['Quoted!', 'Say no more.', 'I gladly obey.'],
    reply: {
      message: '',
      reply: false,
      date: new Date(),
      type: 'quote',
      quote: '',
      sender: 'Bot',
      avatar: botAvatar
    }
  },
  {
    regExp: /(.*)/g,
    answerArray: ['Hello there! Try typing "help"'],
    type: 'text',
    reply: {
      message: '',
      type: 'text',
      reply: false,
      date: new Date(),
      sender: 'Bot',
      avatar: botAvatar
    }
  }
];

const reply = (message: string) => {
  const botReply = botReplies.find((r) => message.search(r.regExp) !== -1);

  if (botReply.reply.type === 'quote') {
    botReply.reply.quote = message;
  }

  if (botReply.type === 'gif') {
    botReply.reply.files[0].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
  }

  if (botReply.type === 'pic') {
    botReply.reply.files[0].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
  }

  if (botReply.type === 'group') {
    botReply.reply.files[1].url = gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
    botReply.reply.files[2].url = imageLinks[Math.floor(Math.random() * imageLinks.length)];
  }

  botReply.reply.message =
    botReply.answerArray[Math.floor(Math.random() * botReply.answerArray.length)];
  return { ...botReply.reply };
};

export function ChatDemo() {
  const messages: ChatMessageType[] = [
    {
      message:
        'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
      reply: false,
      date: new Date(),
      sender: 'John Doe',
      avatar: 'https://i.gifer.com/no.gif'
    },
    {
      message:
        'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
      reply: true,
      date: new Date(),
      sender: 'John Doe',
      avatar: 'https://i.gifer.com/no.gif'
    },
    {
      message: 'Hello, how are you?',
      reply: false,
      date: new Date(),
      sender: 'John Doe',
      avatar: ''
    },
    {
      message: 'Hey looks at that pic I just found!',
      reply: false,
      date: new Date(),
      type: 'file',
      files: [
        {
          url: 'https://i.gifer.com/no.gif',
          type: 'image/jpeg',
          icon: false
        }
      ],
      sender: 'John Doe',
      avatar: ''
    },
    {
      message: 'What do you mean by that?',
      reply: false,
      date: new Date(),
      type: 'quote',
      quote:
        'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
      sender: 'John Doe',
      avatar: ''
    },
    {
      message: 'Attached is an archive I mentioned',
      reply: true,
      date: new Date(),
      type: 'file',
      files: [
        {
          url: 'https://i.gifer.com/no.gif',
          icon: 'file-text-outline'
        }
      ],
      sender: 'John Doe',
      avatar: ''
    },
    {
      message: 'Meet me there',
      reply: false,
      date: new Date(),
      type: 'map',
      latitude: 40.714728,
      longitude: -73.998672,
      sender: 'John Doe',
      avatar: ''
    }
  ];

  const { classes, cx } = useStyles();
  const [_messages, setMessages] = useState<ChatMessageType[]>(messages);

  const sendMessage = ({ message, files }: { message: string; files: FileExt[] }) => {
    const _files = !files
      ? []
      : files.map((file) => ({
          url: file.src,
          type: file.type,
          icon: 'nb-compose'
        }));

    setMessages((current) => [
      ...current,
      {
        message,
        date: new Date(),
        reply: true,
        type: _files.length ? 'file' : 'text',
        files: _files,
        sender: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif'
      }
    ]);
    const botReply = reply(message);
    if (botReply) {
      setTimeout(() => setMessages((current) => [...current, botReply]), 500);
    }
  };

  return (
    <Card className={cx(classes.root)}>
      <Card.Header>
        <p className="chat-description">
          Here&quot;s a complete example build in a bot-like app. Type <code>help</code> to be able
          to receive different message types. Enjoy the conversation and the beautiful UI.
        </p>
      </Card.Header>
      <Card.Body>
        <div className="row">
          <div className="chat-container col-md-12 col-lg-6 col-xxxl-6">
            <Chat
              title="Nebular Conversational UI"
              size="large"
              status="primary"
              messages={_messages}
              mapKey="AIzaSyCl-1aJqqYtkxMpZm5uPSerGNyy3QEglHQ"
              chatFrom={<ChatForm onSend={(body) => sendMessage(body)} dropFiles />}
            />
          </div>
          <div className="chat-container col-md-12 col-lg-6 col-xxxl-6">
            <div className="chart-features">
              <p>Main features:</p>
              <ul>
                <li>different message types support (text, image, file, file group, map, etc)</li>
                <li>drag &amp; drop for images and files with preview</li>
                <li>different UI styles</li>
                <li>custom action buttons (coming soon)</li>
              </ul>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
