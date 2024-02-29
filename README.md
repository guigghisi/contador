Descrever o que é o projeto e o que ele faz.

# Projeto

Este projeto é um exemplo de como hospedar um site React usando o servidor web Apache.

## Funcionalidades

- Hospeda um site React usando o servidor web Apache.
- Fornece instruções passo a passo para compilar o aplicativo React, transferir arquivos para o servidor e configurar o Apache.
- Permite acessar o aplicativo React em um navegador usando um nome de domínio configurado.

# Hospedando um Site React com Apache

Este guia fornece instruções passo a passo sobre como hospedar um site React usando o servidor web Apache.

## Pré-requisitos

- Um servidor Linux com o Apache instalado e configurado.
- Um aplicativo React pronto para implantação. Certifique-se de ter executado `npm run build` para criar uma versão de produção do seu aplicativo.

## Passo 1: Compilar o Aplicativo React

Certifique-se de que seu aplicativo React esteja pronto para implantação. Use o seguinte comando para criar uma versão de produção:

```bash
npm run build
```

Este comando cria uma versão otimizada do seu aplicativo React no diretório `build`.

## Passo 2: Transferir Arquivos para o Servidor

Transfira o diretório `build` para o servidor. Você pode usar o comando `scp` para transferir arquivos de um servidor para outro via SSH:

```bash
scp -r /caminho/do/aplicativo/build usuario@servidor:/caminho/do/servidor
```

Substitua `/caminho/do/aplicativo/build` pelo caminho para o diretório `build` do seu aplicativo React, `usuario` pelo nome de usuário do servidor e `servidor` pelo endereço IP ou nome de domínio do servidor.

## Passo 3: Configurar o Apache

Crie um arquivo de configuração para o seu aplicativo React. Por exemplo, você pode criar um arquivo chamado `meu-aplicativo.conf` no diretório `/etc/apache2/sites-available`:

```apache
<VirtualHost *:80>
    ServerName meu-aplicativo.com
    DocumentRoot /caminho/do/servidor/build
    <Directory /caminho/do/servidor/build>
        Require all granted
    </Directory>
</VirtualHost>
```

Substitua `meu-aplicativo.com` pelo nome de domínio do seu aplicativo e `/caminho/do/servidor/build` pelo caminho para o diretório `build` no servidor.

Ative o arquivo de configuração e reinicie o Apache:

```bash
sudo a2ensite meu-aplicativo
sudo systemctl restart apache2
```

## Passo 4: Acessar o Aplicativo

Agora você pode acessar o seu aplicativo React em um navegador usando o nome de domínio configurado no passo anterior. Por exemplo, se você configurou `meu-aplicativo.com`, você pode acessar o aplicativo em `http://meu-aplicativo.com`.



