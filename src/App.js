import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const dataInicial = [
    "24 Nov 2022 00:00:00",
    "25 Nov 2022 09:41:00",
    "25 Nov 2022 11:04:00",
    "1 jan 2999 00:00:00",
  ];
  const dataFinal = [
    "25 Nov 2022 09:41:00",
    "25 Nov 2022 10:06:00",
    "25 Nov 2022 11:30:00",
    "1 jan 2999 00:00:01",
  ];

  const cidade = "Chapecó - SC";

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const [indexAtual, setIndexAtual] = useState(0);
  const [teste, setTeste] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [quantidadePassada, setQuantidadePassada] = useState(0);

  let dataAtual = new Date();
  var calculoTaxaCarbono = 0;
  var calculoArvore = 0;
  var calculo = parseInt(quantidade);
  var calculoDia = parseInt(calculo / 86400);
  var calculoHora = parseInt((calculo % 86400) / 3600);
  var calculoMinuto = parseInt(((calculo % 86400) % 3600) / 60);
  var calculoSegundo = parseInt(((calculo % 86400) % 3600) % 60);

  function calcular() {
    if (
      dataAtual.getTime() > new Date(dataInicial[indexAtual]).getTime() &&
      dataAtual.getTime() > new Date(dataFinal[indexAtual]).getTime()
    ) {
      setQuantidadePassada(
        quantidadePassada +
          (new Date(dataFinal[indexAtual]).getTime() -
            new Date(dataInicial[indexAtual]).getTime()) /
            1000
      );
      setQuantidade(quantidadePassada);
      setIndexAtual(indexAtual + 1);
    } else if (
      dataAtual.getTime() > new Date(dataInicial[indexAtual]).getTime() &&
      dataAtual.getTime() < new Date(dataFinal[indexAtual]).getTime()
    ) {
      setQuantidade(
        quantidadePassada +
          parseInt(
            (dataAtual.getTime() -
              new Date(dataInicial[indexAtual]).getTime()) /
              1000
          )
      );
    } else if (
      dataAtual.getTime() < new Date(dataInicial[indexAtual]).getTime() &&
      dataAtual.getTime() < new Date(dataFinal[indexAtual]).getTime()
    ) {
      setQuantidade(quantidadePassada);
    }
  }
  setTimeout(() => {
    setTeste(teste + 1);
  }, 1000);
  useEffect(() => {
    calcular();
    // eslint-disable-next-line
  }, [quantidadePassada, quantidade, indexAtual, teste]);

  return (
    <div className="container">
      <div className="logos">
        <img src="logo.png" alt="logo1" />
        <img src="logo.png" alt="logo2" />
        <img src="logo.png" alt="logo3" />
        <img src="logo.png" alt="logo4" />
      </div>
      <div className="center">
        <div>
          <h1>{cidade}</h1>
          <h3>
            {dataAtual.getDate()} de {meses[dataAtual.getMonth()]} de{" "}
            {dataAtual.getFullYear()}
          </h3>
        </div>
        <div>
          {" "}
          <h2>
            Já estamos com <br /> {calculoDia} Dias {calculoHora} Horas{" "}
            {calculoMinuto} Minutos {calculoSegundo} Segundos
          </h2>
        </div>
        <div>
          <h3>
            {dataAtual.getHours()}:{dataAtual.getMinutes()}:
            {dataAtual.getSeconds()}
          </h3>
        </div>
      </div>
      <div className="right">
        <h2>Até agora emitimos <br/>{calculoTaxaCarbono}  toneladas</h2>
        <h2>Para neutralizar plantaremos <br/> {calculoArvore} árvores</h2>
      </div>
    </div>
  );
}

export default App;
