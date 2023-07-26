import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  //seta a data inicial (deixa a ultima data como 1 jan 2999 00:00:00)
  const dataInicial = [
    "24 Nov 2022 00:00:00",
    "25 Nov 2022 09:41:00",
    "25 Nov 2022 11:04:00",
    "25 Nov 2022 16:00:00",
      "24 Jul 2023 00:00:00",
    "1 jan 2999 00:00:00",
  ];
  //seta a data final (deixa a ultima data como 1 jan 2999 00:00:01)
  const dataFinal = [
    "25 Nov 2022 09:41:00",
    "25 Nov 2022 10:06:00",
    "25 Nov 2022 11:30:00",
    "25 Nov 2022 17:30:00",
    "26 Jul 2023 00:00:00",
    "1 jan 2999 00:00:01",
  ];
  //Troca a cidade
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

  var calculo = parseInt(quantidade);
  var calculoDia = parseInt(calculo / 86400);
  var calculoHora = parseInt((calculo % 86400) / 3600);
  var calculoMinuto = parseInt(((calculo % 86400) % 3600) / 60);
  var calculoSegundo = parseInt(((calculo % 86400) % 3600) % 60);
  var calculoTaxaCarbono = (calculo / 60) * 0.0263;
  var calculoArvore = (calculo / 390) * 1;
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
    if (teste === 60) {
      setTeste(0);
    }
    // eslint-disable-next-line
  }, [quantidadePassada, quantidade, indexAtual, teste]);

  return (
    <div className="containerBackground">
      <div className="container">
        <div className="logos">
          <img src="logo1.png" alt="logo1" />
          <img src="logo2.png" alt="logo2" />

        </div>
        <div className="center">
          <div>
            <h1>{cidade}</h1>
            <h3>
              {dataAtual.getDate()} de {meses[dataAtual.getMonth()]} de{" "}
              {dataAtual.getFullYear()}
            </h3>
          </div>
          <div className="info">
            <p>
              Até agora emitimos <br />
              {calculoTaxaCarbono.toFixed(2).replace(".", ",")} <br />
              toneladas de carbono
            </p>
            <p>
              Para neutralizar plantamos <br /> {Math.round(calculoArvore)} <br />{" "}
              mudas de árvores
            </p>
          </div>
          <div>
            <p>
              Já estamos com <br /><b> {calculoDia} Dias {calculoHora} Horas{" "}
              {calculoMinuto} Minutos {calculoSegundo} Segundos</b> <br/> de evento
            </p>
          </div>
          <div>
            <h3>
              {dataAtual.getHours()}:{dataAtual.getMinutes()}:
              {dataAtual.getSeconds()}
            </h3>
          </div>
        </div>
        <div className="right" className="logos">
          <img src="logo3.png" alt="logo3" />
          <img src="logo4.png" alt="logo4" />
        </div>
      </div>
    </div>
  );
}

export default App;
