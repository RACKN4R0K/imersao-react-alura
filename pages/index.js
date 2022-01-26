import AppConfig from '../config.json'; 
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import {useRouter} from 'next/router'
import React from 'react';


function Titulo(props) {
  var Tag = props.tag || 'h1'
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag}{
      font-size: 24px;
      font-weight: 600;
      }
      `}</style>
    </>

  )
}

export default function PaginaInicial() {
  // const username = 'RACKN4R0K';
  const [username, setUsername] = React.useState('')
  const roteamento = useRouter()

  return ( 
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: AppConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: AppConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function(infoDoEvento){
              infoDoEvento.preventDefault()//faz que a pagina não recarregue quando o submit do botão for acionado 
              roteamento.push('./components/chat')//navega ate o chat.js e faz um rotemento vis useRooter

              //o useRoter foi usado para que o navegador não precisasse atualizar quando o submit acionado

            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h1">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: AppConfig.theme.colors.neutrals[300] }}>
              {AppConfig.name}
            </Text>
            
            <TextField
              value={username}
              onChange={function (event){
                //Valor para encontrar o perfil do git
                const valor = event.target.value
                // guarda a variavel valor no setUsername e também no usuario.
                setUsername(valor)//avisa o react onde precisará mudar....
                }
              }
              placeholder='Digite seu usuario' 
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: AppConfig.theme.colors.neutrals[200],
                  mainColor: AppConfig.theme.colors.neutrals[900],
                  mainColorHighlight: AppConfig.theme.colors.primary[500],
                  backgroundColor: AppConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: AppConfig.theme.colors.neutrals["000"],
                mainColor: AppConfig.theme.colors.primary[500],
                mainColorLight: AppConfig.theme.colors.primary[400],
                mainColorStrong: AppConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: AppConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: AppConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: AppConfig.theme.colors.neutrals[200],
                backgroundColor: AppConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
