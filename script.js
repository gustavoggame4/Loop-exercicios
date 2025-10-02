

  function ex1() {
      let n = prompt("Digite um número para o triângulo crescente:");
      let resultado = "";
      for (let i = 1; i <= n; i++) {
        resultado += "#".repeat(i) + "\n";
      }
      document.getElementById("saida").textContent = resultado;
      console.log(resultado);
    }

    function ex2() {
      let n = prompt("Digite um número para o triângulo decrescente:");
      let resultado = "";
      for (let i = n; i >= 1; i--) {
        resultado += "#".repeat(i) + "\n";
      }
      document.getElementById("saida").textContent = resultado;
      console.log(resultado);
    }

    function ex3() {
      let resultado = "";
      for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          resultado += "FizzBuzz\n";
        } else if (i % 3 === 0) {
          resultado += "Fizz\n";
        } else if (i % 5 === 0) {
          resultado += "Buzz\n";
        } else {
          resultado += i + "\n";
        }
      }
      document.getElementById("saida").textContent = resultado;
      console.log(resultado);
    }

    function ex4() {
      let tamanho = 8;
      let resultado = "";
      for (let linha = 0; linha < tamanho; linha++) {
        for (let coluna = 0; coluna < tamanho; coluna++) {
          if ((linha + coluna) % 2 === 0) {
            resultado += "..";
          } else {
            resultado += "#";
          }
        }
        resultado += "\n";
      }
      document.getElementById("saida").textContent = resultado;
      console.log(resultado);
    }

    function limpar() {
      document.getElementById("saida").textContent = "";
      console.clear();
    }