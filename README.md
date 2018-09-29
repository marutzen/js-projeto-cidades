# Projeto para cadastro de cidades e visualização da previsão do tempo
Projeto criado para cadastro de cidades e visualização da previsão do tempo destas. <br>
Apenas é permitido o cadastro de cidades suportadas pela API OpenWeather.

# Tecnologias
 - SpringBoot
 - MySQL
 - Javascript

# API
OpenWeather: Utilizada para consultar a previsão do tempo das cidades.

# Comando para baixar o projeto pelo GIT
git clone https://github.com/marutzen/projeto-cidades.git

# Importação do projeto no eclipse
1. Menu File > Import > Maven > Existing Maven Projects
2. Botão direito em cima do projeto e Run As > Maven clean
3. Botão direito em cima do projeto e Run As > Maven install

# Configuração MySQL
1. Criar um schema com o nome "cidades", caso utilize outro nome alterar a propriedade spring.datasource.url no application.properties no eclipse.
2. Criar tabela cidade

```
CREATE TABLE `cidade` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
```

# Execução do projeto
1. Botão direito em cima do projeto e Run As > Spring Boot App
2. Acessar http://localhost:8080/index.html
