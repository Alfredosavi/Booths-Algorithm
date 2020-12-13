# Booths-Algorithm

O `algoritmo de booth` é um algoritmo de **multiplicação** que permite multiplicar dois inteiros binários com sinal em **complemento de 2**.


## 🔥 Como usar?
  OBS: O algoritmo está disponível para o uso no [Git pages](https://alfredosavi.github.io/Booths-Algorithm/).
  1. Insira nos campos de `inputs` os valores em **decimal**, em seguida clique no botão `Send`;
  2. Clique no botão `Steps` para ver passo a passo o **flowchart** do Algoritmo e a **tabela**;
  3. Use o botão `Reset` para **limpar** o flowchart e a tabela.


## :warning: Algoritmo
  1. Converter os valores **M** (multiplicando) e **Q** (multiplicador) para **binário**;
      1. Se o número informado for menor que 0, usa-se o método **complemento de dois**;
  2. Criar um **contador** com a **quantidade de bits** do número **Q**;
  3. Setar os valores de **A** e **Q<sub>-1</sub>** para **0**;
  3. Realizar o **comparativo** entre o **último bit** de **Q** com o de **Q<sub>-1</sub>**;
      1. Se **Q=1** e **Q<sub>-1</sub>=0**, realiza a **subtração** de A por M e assume este novo valor para A (**A <- A -M**);
      2. Se **Q=0** e **Q<sub>-1</sub>=1**, realiza a **soma** de A por M e assume este novo valor para A (**A <- A + M**);
      3. Se **Q=Q<sub>-1</sub>**, **não é necessário** nenhum **passo algébrico**, é feito **somente** o **deslocamento**;
  4. Após cada **comparativo**, realizasse o **deslocamento aritmético para a direita** e em seguida **decrementa o contador**.
  

## :hammer: Exemplo

Multiplicação de (5)<sub>10</sub> X (7)<sub>10</sub>:

1. Converter para **binário**:
    1. (5)<sub>10</sub> = (0101)<sub>2</sub>;
    2. (7)<sub>10</sub> = (0111)<sub>2</sub>;
2. Criar um **contador** com a quantidade de **bits do multiplicando**:
    1. Count = 4;
3. **Setar** os valores de **A** e de **Q<sub>-1</sub>** para **0**:
    1. A = 0000;
    2. Q<sub>-1</sub> = 0;
4. **Comparar** o **último bit de Q** com **Q<sub>-1</sub>**:
    1. Se **Q=1** e **Q<sub>-1</sub>=0** --> `A <- A - M`;
    2. Se **Q=0** e **Q<sub>-1</sub>=1** --> `A <- A + M`;
    3. Se **Q=Q<sub>-1</sub>** --> `Nada` (nenhum passo algébrico);
5. Realizar o `deslocamento aritmético para a direita` e em seguida `decrementar o contador.`

**Repetir o passo 4° e 5° até o contador ser igual a zero.**
    
    
Tabela com o passo a passo do exemplo a cima:
Operação     |  A   |  Q       | Q<sub>-1</sub>     | Razão
:----------: | :--: | :------: | :----------------: | :----:
|            | 0000 | 011**1** | **0**              | Valores Iniciais
A <- A - M   | 1011 | 011**1** | **0**              | 1/4 Ciclo
Deslocamento | 1101 | 101**1** | **1**              | 
Nada         | 1110 | 101**1** | **1**              | 2/4 Ciclo
Deslocamento | 1110 | 110**1** | **1**              | 
Nada         | 1111 | 110**1** | **1**              | 3/4 Ciclo
Deslocamento | 1111 | 011**0** | **1**              | 
A <- A + M   | 0100 | 011**0** | **1**              | 4/4 Ciclo
Deslocamento | **0010** | **0011** | 0              | 

`Resultado:` **A = 0010 Q = 0011** => (**00100011**)<sub>2</sub> = (**35**)<sub>10</sub>


## ⚡️ Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
